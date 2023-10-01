import "./App.css";
import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import SingleTodo from "./components/SingleTodo";
export interface IEditTodo {
  todo?:ITodo,
  handleUpdateTodosAfterEdit:(todo:ITodo,idChange:number)=>void,
  id?:number,
  handleToggleTick: (id:number) => void,
  handleDeleteTodo:(id:number) => void
}

export interface ITodo {
  id:number;
  content:string;
  isDone:boolean;

}
function App() {
  
 
  const [todo,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>(JSON.parse(localStorage.getItem("todos-ts")!) || []); //quan li todos here

  const handleAddTodo = () =>{
    // setTodos([...todos, {id:Date.now(),content: todo,isDone:false}])
    setTodos(prev=>([...prev, {id: Date.now(),content:todo,isDone:false}]))
  }

  const handleToggleTick = (id: number) => {
    setTodos(todos.map(item => item.id === id ? {...item, isDone: !item.isDone}: item))
  }
  const handleDeleteTodo = (id:number) => {
    setTodos(todos?.filter(item => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("todos-ts", JSON.stringify(todos))
  }, [todos])
  
  const handleUpdateTodosAfterEdit = (todo:ITodo, idChange:number) => {
    setTodos(() => {
      const newState = todos.map(item => item.id === idChange ? {...item, content: todo.content}: item)
      return newState;
    })
  }
  return (
    <>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}/>
      <h3>show list todos</h3>
      {todos?.map((item) => {
        return (
        <div  key={item?.id}>
          <SingleTodo todo={item} 
          handleToggleTick={handleToggleTick}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodosAfterEdit={handleUpdateTodosAfterEdit}
          />
        </div>
        )
      })}
     
    </>
  );
}

export default App;
