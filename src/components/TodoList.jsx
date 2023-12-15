import { MdOutlineDelete } from "react-icons/md";

const TodoList = ({item,onToggle,ondelete}) => {

  
  return (
    <div className='flex items-center justify-between w-full bg-slate-500 p-2 rounded-[10px] '>
        <div className='flex gap-3'> 
            <input type="checkbox" value ={item.completed} checked={item.completed} onChange={()=>onToggle(item.id)}/>
            <p  className={`font-semibold text-white ${item.completed && "line-through opacity-50"}` }>{item.text}</p>
        </div>
        <MdOutlineDelete className='text-white cursor-pointer hover:scale-150 hover:text-red-500 transition-all' onClick={()=>ondelete(item.id)} />
    </div>
  )
}
export default TodoList