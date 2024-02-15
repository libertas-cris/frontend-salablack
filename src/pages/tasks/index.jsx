import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { DATA } from "../../utils/dados";
import { Header } from "../../components/header";
import { InputFilter } from '../../components/inputFilter'; 

import * as Dialog from '@radix-ui/react-dialog';

export function Tasks(){

  const [activeInputFilter, setActiveInputFilter] = useState('');
  const [data, setData] = useState(DATA);
  const [recoveryData, setRecoveryData] = useState(DATA);

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
      sortable: true
    },
    {
      name: 'Responsável',
      selector: row => row.owner,
    },
    {
      name: 'Descrição',
      cell: row => <Dialog.Root>
        <Dialog.Trigger className='bg-neutral-200 px-4 py-1 rounded-md flex items-center'>
            Expandir
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='inset-0 absolute z-10 bg-black/60'/>
        <Dialog.Content className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[50vh] bg-slate-100 rounded-md flex flex-col outline-none'>
            <Dialog.Close className='absolute top-2 right-4'>
              X
            </Dialog.Close>
            <div className='flex flex-1 flex-col p-5'>
            {row.description}
              </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    },
    {
      name: 'Status',
      cell: row => <StatusSelector row={row} onUpdate={(id, newStatus) => handleStatusUpdate(id, newStatus)} />,
    }
  ];


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
      //AQUI VEM A REQUISIÇÃO DE PUT NO BANCO DE DADOS PARA ALTERAR STATUS DA TASK
      return item;
    });
    setData(updatedData);
  };

  function handleClearInputFilter(e){
    setActiveInputFilter('');
    setData(recoveryData);

  }

  function handleFilter(value) {
    setActiveInputFilter(value);

    const filteredData = data.filter((item) => {
      const regex = new RegExp(`.*${value}.*`, 'i');
    return item.name.match(regex) !== null;

      
    })

    setData(filteredData);


    if(value === ''){
      setData(recoveryData);
    }

  }


  return (
    <div className="">
      <Header />
      <div className="h-screen grid items-center max-w-[75%] mx-auto rounded-lg">
        <div className='flex justify-between mb-[-350px] items-center'>
        <h1 className="flex text-white font-bold text-2xl rounded-lg self-end ml-7">Checklist de Ações para o Caixa Rápido</h1>
        <InputFilter value={activeInputFilter} onChange={(e) => handleFilter(e.target.value)} onClear={handleClearInputFilter}/>
        </div>
        <div > 
        
          <DataTable
          fixedHeader
            fixedHeaderScrollHeight='400px'
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
    <select className={`rounded-lg ${
      status === 'A fazer' ? 'bg-slate-300' :
      status === 'Fazendo' ? 'bg-cyan-600' :
      status === 'Feito' ? 'bg-green-600' : ''}`}
      value={status} onChange={handleChange}
    >
      <option className='bg-slate-400' value="A fazer">A fazer</option>
      <option className='bg-cyan-600' value="Fazendo">Fazendo</option>
      <option className='bg-green-700' value="Feito">Feito</option>
    </select>
    
  );
};
