import { GrClearOption } from "react-icons/gr";

export function InputFilter({onChange, onClick}){
  return(
    <form action="" className="flex align-items-center justify-end">
      <input
      className="h-8 w-48 border border-gray-300 px-4 hover:cursor-pointer outline-none mb-2 rounded-bl rounded-tl" 
      type="text" 
      onChange={onChange}
      placeholder="Pesquisar Tarefa"
      
      />

      <button type="submit">
        <GrClearOption size={32} className="bg-rose-600 mb-2 rounded-br rounded-tr" onClick={onClick}/>
      </button>

    </form>
  )
}