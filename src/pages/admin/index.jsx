import DataTable from 'react-data-table-component';
import { Header } from "../../components/header"
import { Footer } from '../../components/footer';
import { api } from '../../services/api';

export function Admin(){
  
  const getAllusers = async () => {
    const users = await api.get('/users');

    const allUsers = users.map(item => {
      console.log(item)
      return item;
    })
  }

  const data = getAllusers();

  return(
    <div className='h-screen max-w-[85%] mx-auto overflow-hidden'>
      <Header />

      <div className="menu text-white mt-32 flex justify-between gap-8 mb-4 items-end">
        


      </div>
          <DataTable
          data={data}
             
          />

          <Footer />
          </div>
  )
}