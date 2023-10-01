import {  useState } from "react";
import { IEditTodo, ITodo } from "../App";

const SingleTodo:React.FC<IEditTodo> = (props:IEditTodo) => {
    // const [todoEdit,setTodoEdit] = useState<string>(props.todo?.content || ""); //cái này đang bị dùng chung
    // const [todo,setTodo] = useState<{content:string, id:string}>();
    const [todo, setTodo] = useState<string>(props.todo?.content || "");
    const [idChange,setIdChange] = useState<number>();
    const [isEditing,setIsEditing] = useState<boolean>(false)
    const todoAfterChange:ITodo = {
      id: idChange || 0,
      content: todo,
      isDone: props?.todo?.isDone || false
    }
    return(
      <>
      <span style={{
                  color: props.todo?.isDone === true ? "green":""
                }}>{props.todo?.content}</span>
      {!isEditing && (
  
        <button onClick={()=>setIsEditing(true)}>edit</button>
  
      )}
      {isEditing && (
        <>
        <input type="text" value={todo} name={props?.todo?.id.toString() } 
        onChange={(e) => {
            setIdChange(props.todo?.id)
            setTodo(e.target.value)}
        } />
            <button 
            onClick={()=>{
                props?.handleUpdateTodosAfterEdit(todoAfterChange, idChange!)
                setIsEditing(false)
            }}
            >OK</button>
            <button onClick={()=>setIsEditing(false)}>Cancel edit</button>
            </>
      )}
      <button style={{marginLeft:'10px'}} 
            onClick={() => props?.handleToggleTick(props?.todo?.id || 0)}
            >Tick</button>
            <button style={{marginLeft:'10px'}}
             onClick={()=>props?.handleDeleteTodo(props?.todo?.id || 0)}
             >Delete</button>
      </>
    )
  }
  export default SingleTodo