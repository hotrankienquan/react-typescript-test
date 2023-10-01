
import React, {  SetStateAction } from 'react'
interface IProps {
    todo:string;
    setTodo: React.Dispatch<SetStateAction<string>>;
    handleAddTodo: () =>void;
}
const InputField = ({todo,setTodo,handleAddTodo}:IProps) => {
    const handleAdd =(e:React.FormEvent)=>{
        e.preventDefault()
        handleAddTodo()
        setTodo("")
    }
    return (
        <>
            <form onSubmit={handleAdd}>

                <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="add to do"/>
                <button type={"submit"} >Send</button>
            </form>

        </>
    )
}

export default InputField;