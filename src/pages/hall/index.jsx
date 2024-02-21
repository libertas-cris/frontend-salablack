import { Header } from '../../components/header';


export function Hall(){
  return (
    <div className="container grid grid-cols-1 mx-auto">
      <Header />

      <div className="wrapper pt-[4.5rem] h-screen grid items-center">

      <div className="app grid grid-cols-3 auto-rows-[250px] gap-8 px-6">
        <div className='rounded-md bg-slate-700'></div>
        <div className='rounded-md bg-slate-700'></div>
        <div className='rounded-md bg-slate-700'></div>
        

      </div>
      </div>

    </div>

    
  )
}