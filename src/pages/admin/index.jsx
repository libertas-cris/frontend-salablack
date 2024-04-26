import DataTable from 'react-data-table-component';
import { Header } from "../../components/header"
import { Footer } from '../../components/footer';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner'

export function Admin() {

  const paginationOptions = {
    rowsPerPageText: 'Tarefas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
    paginationRowsPerPageOptions: [5, 10, 20, 50]
  }

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  async function handleCheckboxChange(event, rowId) {
    const isChecked = event.target.checked;

    await api.put(`/user/update/${rowId}/${isChecked}`);

  }

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setIsLoading(true);
        const users = (await api.get('/users')).data
        setData(users);

        setIsLoading(false)
      } catch (error) {
        console.error('Erro ao carregar os dados de usuários', error);


      }

    }

    getAllUsers();

  }, []);

  if (isLoading) {
    return <div className='flex  h-screen justify-center place-items-center'>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  }

  return (
    <div>
      <Header />

      <div className='h-screen i place-content-center px-36'>
      <DataTable
        title="Usuários Cadastrados"
        columns={columns}
        data={data}
        noDataComponent={<div className='h-[100px] w-[100%] font-bold text-lg flex items-center justify-center shadow-md p-6 rounded-lg'> Nenhuma tarefa para mostrar </div>}
        pagination
        paginationPerPage={5}
        paginationComponentOptions={paginationOptions}
        fixedHeader
        highlightOnHover
      />
      </div>
      <Footer />
    </div>

  )
}