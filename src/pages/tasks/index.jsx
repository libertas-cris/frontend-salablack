import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { DATA } from "../../services/data";
import { useState } from "react";

import { Box } from "../../components/box";

export function Tasks(){

  const [data, setData] = useState(DATA);

  const columns = [{
    accessorKey: 'task',
    header: 'Task',
    cell: (props) => <p>{props.getValue()}</p>
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: (props) => <p>{props.getValue()?.name}</p>
  },

  {
    accessorKey: 'due',
    header: 'Due',
    cell: (props) => <p>{props.getValue()?.toLocaleTimeString()}</p>
  },

  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: (props) => <p>{props.getValue()}</p>
  },


]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "ondEnd"
})


  return(
    <div className="flex items-center h-screen">
      <div className= {`table border border-solid border-white mx-auto w-[${table.getTotalSize()}px]`}>

        {table.getHeaderGroups().map(headerGroup => <div className="tr flex w-fit-content" key={headerGroup.id}> 
        {headerGroup.headers.map(
            header => <div className={`th relative flex justify-center items-center text-gray-400 p-2 font-bold text-xs uppercase text-center shadow-inset border border-solid border-gray-800 w-[${header.getSize()}px]`} key={header.id}>
            {header.column.columnDef.header}

            <div 
            onMouseDown={
              header.getResizeHandler()
            }

            onTouchStart={
              header.getResizeHandler() 
            }

            className= {`resizer absolute opacity-0 top-0 right-0 h-full w-5 bg-blue-500 cursor-col-resize select-none ${header.column.getIsResizing() ? 'bg-green-500 opacity-100' : ""}`}/>
          </div>
        )}
        </div>)}
        {
          table.getRowModel().rows.map(row => <div className="flex w-fit-content" key={row.id}>
            {row.getVisibleCells().map(cell => <div className={`shadow-inset border border-solid border-gray-800 w-[${cell.column.getSize()}px]`} key={cell.id}>
              {
                flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()

                )
              }

            </div>)}

          </div>)
        }
      </div>
    </div>
  )
}