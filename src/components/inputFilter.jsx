import { GrClearOption } from "react-icons/gr";

export function InputFilter({onChange, onClear, value}){

  return(
    <form className="flex items-center text-black bg-white rounded-lg">
      <input
      className="h-full px-2 hover:cursor-pointer outline-none mb-2 rounded-bl rounded-tl self-center flex" 
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Pesquisar Tarefa"
      
      />

      <button type="button" onClick={onClear}>
        <GrClearOption size={30} className="bg-rose-600  rounded-br rounded-tr"/>
      </button>

    </form>
  )
}