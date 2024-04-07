import DataTable from 'react-data-table-component';
import { Header } from "../../components/header"
import { Footer } from '../../components/footer';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Admin(){

  const paginationOptions = {
    rowsPerPageText: 'Tarefas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
    paginationRowsPerPageOptions: [5, 10, 20, 50]
  }

  const [data, setData] = useState([]);

  const columns = [
    {
      name: 'Aluno',
      selector: row => row.name,
      wrap: true, 
      style: {
        wordWrap: 'break-word',
        padding: '1rem'
      }
    },

    {
      name: 'Email',
      selector: row => row.email
    },
    
    {
      name: 'Ativo',
      cell: row => <input 
      type="checkbox" 
      defaultChecked={row.is_Active} 
      onChange={(event) => handleCheckboxChange(event, row.id)}
      
      />
    }
  ]

  async function handleCheckboxChange(event, rowId){
    const isChecked = event.target.checked;

    await api.put(`/user/update/${rowId}/${isChecked}`);

  }

  async function getAllUsers(){
    const users = (await api.get('/users')).data
    setData(users);
    
  }

  useEffect(() => {
    getAllUsers();

  }, []);

  return(
    <div  className='h-screen  max-w-[85%] flex flex-col justify-center mx-auto overflow-hidden'>
      <Header />

      <DataTable 
      columns={columns}
      data={data}
      noDataComponent={<div className='h-[100px] w-[100%] font-bold text-lg flex items-center justify-center shadow-md p-6 rounded-lg'> Nenhuma tarefa para mostrar </div>}
      pagination
      paginationComponentOptions={paginationOptions}
      />
      <Footer />      
    </div>
  )
}