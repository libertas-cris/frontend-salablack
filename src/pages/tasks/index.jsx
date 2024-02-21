import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { DATA } from "../../utils/dados";
import { Header } from "../../components/header";
import { InputFilter } from '../../components/inputFilter'; 
import { Footer } from '../../components/footer';
import {  format  } from 'date-fns'

import * as Dialog from '@radix-ui/react-dialog';

export function Tasks(){

  const [selectedData, setSelectedData] = useState('');
  const [activeInputFilter, setActiveInputFilter] = useState('');
  const [data, setData] = useState(DATA);
  const[inputDate, setInputDate] = useState('');
  const [recoveryData, setRecoveryData] = useState(DATA);
  const uniqueOwners = Array.from(new Set(recoveryData.map((item => item.owner)))).filter(item => item !== "");

  const customStyles = {
    table: {
      style: {
        borderRadius: '36px', // Define o raio de arredondamento das bordas da tabela
      },
    },
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
    row: {
      style: {
        backgroundColor: '#d41e1e', // Define a cor de fundo padrão para todas as linhas
        '&:nth-child(odd)': {
          backgroundColor: '#e0e0e0', // Define a cor de fundo para linhas ímpares
        },
      },
    },
  };
  


  const columns = [
    {
      name: 'Tarefa',
      selector: row => row.name,
      wrap: true,
      grow: 2,
      style: {
        wordWrap: 'break-word',
        padding: '1rem'
      }
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
    setData(recoveryData);

    const filteredData = recoveryData.filter((item) => {
      const regex = new RegExp(`.*${value}.*`, 'i');
    return item.name.match(regex) !== null;
      
    })

    setData(filteredData);


    if(value === ''){
      setData(recoveryData);
    }

  }

  function HandleSelectedFilter() {

    const handleChangeFilter = (e) => {
      setData(recoveryData);
      setSelectedData(e.target.value);

      const owner = e.target.value;
      const ownerFiltered = recoveryData.filter((item) => {
        console.log(owner)
        return item.owner === owner;
        
      })

      if(e.target.value === 'Geral'){
        setData(recoveryData);
        return;
      }

      setData(ownerFiltered);
    }

    return (
    <select className='bg-white text-black rounded-sm px-2 py-1 text-sm' onChange={handleChangeFilter} value={selectedData}>
      <option hidden >Filtrar por responsável</option>
      <option key={'Geral'}>Geral</option>         
    {uniqueOwners.map((owner) => {
      return <option className='bg-white' key={owner}>{owner}</option>

    })}
    
    </select>
    )
  }

  function handleInputChange(e){
    setInputDate(new Date(`${e.target.value + 'T00:00:00'}`));

  }

  return (
    
    <div className='h-screen max-w-[85%] mx-auto overflow-hidden'>
      <Header />

      <div className="menu text-white mt-32 flex justify-between gap-8 mb-4 items-end">
        <div className="submenu w-full flex items-center cursor-pointer justify-between">
          <p className='text-2xl'>Checklist de Ações - Caixa Rápido</p>

          <div className='flex flex-col'>
            <p>Escolha o dia do seu caixa rápido:</p>
          <input onChange={handleInputChange} type='date'className='text-black px-4'></input>
          </div>
          
          
          </div>
          <HandleSelectedFilter />
          <InputFilter value= {activeInputFilter} onChange={(e) => handleFilter(e.target.value)} onClear={handleClearInputFilter}/>


      </div>
          <DataTable
            fixedHeader
            fixedHeaderScrollHeight='55vh'
            columns={columns}
            data={data}
            selectableRows
            pagination
            paginationComponentOptions={paginationOptions}
            customStyles={customStyles}
            noDataComponent={<div className='h-[100px] w-[100%] font-bold text-lg flex items-center justify-center shadow-md p-6 rounded-lg'> Nenhuma tarefa para mostrar </div>}
            highlightOnHover
            responsive
            contextActions  
          />

          <Footer />
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
