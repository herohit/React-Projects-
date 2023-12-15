import React from 'react'
import TodoList from './TodoList'



const TodoArea = ({allTodos,onToggle,ondelete}) => {
  return (
    <div className={`w-10/12 bg-white mt-10 h-[62%] rounded-[30px] py-2 px-8 flex flex-col gap-3  ${allTodos.length<=0 && 'items-center justify-center'}`}>
        {allTodos.length>0 ? allTodos.map((item)=>(<TodoList key={item.id} item={item} onToggle={onToggle} ondelete={ondelete}/>)):<div className='text-red-300 font-semibold text-[60px] text-center'><p>No Todos.</p>Add some Todos.<p></p></div>}
    </div>
  )
}

export default TodoArea