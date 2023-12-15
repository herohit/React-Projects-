import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";


const Save = ({onSave}) => {
    const [text,setText] = useState("")
    
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!text){
            alert("Please add todo.")
            return
        }
        
        console.log(text)
        onSave(text)
        setText("")
 
    }
    return(
        <form onSubmit={onSubmit} className="flex justify-between items-center bg-white w-10/12 p-2 rounded-md">
            <div className="flex items-center">
                <label className="pr-2" htmlFor="save"><IoMdAddCircleOutline /></label>
            <   input className="border-none outline-none" id="save" type="text" placeholder="Add something to do......"  value={text} onChange={(e)=>(setText(e.target.value))} />
            </div>
            <input className="hover:scale-105 transition ease-in-out bg-slate-800 text-white py-1 px-4 rounded-md font-semibold cursor-pointer" type="submit"  value='Save'/>  
        </form>
    )
}

export default Save