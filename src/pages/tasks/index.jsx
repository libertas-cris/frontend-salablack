import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { DATA } from "../../utils/dados";
import { Header } from "../../components/header";

export function Tasks(){

  const customStyles = {
    header: {
      style: {
        minHeight: '56px',
      },
    },
    headRow: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: 'gray',
      },
    },
    headCells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: 'gray',
        },
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: 'gray',
        },
      },
    },
  };


  const columns = [
    {
      name: 'Tarefa',
      selector: row => row.name,
    },
    {
      name: 'Data de Vencimento',
      selector: row => row.dueDate,
    },
    {
      name: 'Responsável',
      selector: row => row.owner,
    },
    {
      name: 'Descrição',
      selector: row => row.description,
    },
    {
      name: 'Status',
      cell: row => <StatusSelector row={row} onUpdate={(id, newStatus) => handleStatusUpdate(id, newStatus)} />,
      conditionalCellStyles: [
        {
          when: row => row.status === 'Feito',
          style: {
            backgroundColor: 'green',
          }      
        },
      ]
    }
  ];

  const [data, setData] = useState(DATA);
  console.log(data)

  const paginationOptions = {
    rowsPerPageText: 'Tarefas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
    paginationRowsPerPageOptions: [5, 10, 20, 50]
  }

  const handleStatusUpdate = (id, newStatus) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setData(updatedData);
  };


  return (
    <div className="">
      <Header />
      <div className="h-screen grid items-center max-w-[75%] mx-auto rounded-lg">
        
        <h1 className="flex text-white font-bold text-2xl rounded-lg self-end ml-7">Checklist de Ações para o Caixa Rápido</h1>
        <div className=''> 
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight='25rem'
            columns={columns}
            data={data}
            selectableRows
            pagination
            paginationComponentOptions={paginationOptions}
            customStyles={customStyles}
            
          />
        </div>
      </div>
    </div>
  );
}

const StatusSelector = ({ row, onUpdate }) => {
  const [status, setStatus] = useState(row.status);

  const handleChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onUpdate(row.id, newStatus);
  };

  return (
    <select value={status} onChange={handleChange}>
      <option value="A fazer">A fazer</option>
      <option value="Fazendo">Fazendo</option>
      <option value="Feito">Feito</option>
    </select>
  );
};
