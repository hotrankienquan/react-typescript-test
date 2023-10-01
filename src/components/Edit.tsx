import { ITodo } from "../App";
import {useState} from 'react'
const EditTodo = ({content}:ITodo) => {
    const [todoEdit,setTodoEdit] = useState<string>(content);

    return(
      <>
       <input type="text" value={todoEdit} onChange={e => setTodoEdit(e.target.value)} />
            <button>OK</button>
            <button onClick={()=>setIsEdit(false)}>Cancel edit</button>
      </>
    )
  }
  export default EditTodo;