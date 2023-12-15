import { FormEvent } from "react";
import "./App.css";
import WithResizeAdvancedUsage from "./HOCs/withResizeAdvancedUsage";
import useInput from "./hooks/useInput";
import Input from "./reuse/InputField";
export interface IEditTodo {
  todo?: ITodo;
  handleUpdateTodosAfterEdit: (todo: ITodo, idChange: number) => void;
  id?: number;
  handleToggleTick: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  index: number;
}

export interface ITodo {
  id: number;
  content: string;
  isDone: boolean;
}

function App() {
  // const [todo,setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<ITodo[]>(JSON.parse(localStorage.getItem("todos-ts")!) || []); //quan li todos here
  // const [completedTodos, setCompletedTodos] = useState<Array<ITodo>>([]);

  // const handleAddTodo = () =>{
  //   // setTodos([...todos, {id:Date.now(),content: todo,isDone:false}])
  //   setTodos(prev=>([...prev, {id: Date.now(),content:todo,isDone:false}]))
  // }

  // const handleToggleTick = (id: number) => {
  //   setTodos(todos.map(item => item.id === id ? {...item, isDone: !item.isDone}: item))
  // }
  // const handleDeleteTodo = (id:number) => {
  //   setTodos(todos?.filter(item => item.id !== id))
  // }

  // useEffect(() => {
  //   localStorage.setItem("todos-ts", JSON.stringify(todos))
  // }, [todos])

  // const handleUpdateTodosAfterEdit = (todo:ITodo, idChange:number) => {
  //   setTodos(() => {
  //     const newState = todos.map(item => item.id === idChange ? {...item, content: todo.content}: item)
  //     return newState;
  //   })
  // }

  // const onDragEnd = (result: DropResult) => {
  //   const { destination, source } = result;

  //   console.log(result);

  //   if (!destination) {
  //     return;
  //   }

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }

  //   let add;
  //   const active = todos;
  //   const complete = completedTodos;
  //   // Source Logic
  //   if (source.droppableId === "TodosList") {
  //     add = active[source.index];
  //     active.splice(source.index, 1);
  //   } else {
  //     add = complete[source.index];
  //     complete.splice(source.index, 1);
  //   }

  //   // Destination Logic
  //   if (destination.droppableId === "TodosList") {
  //     active.splice(destination.index, 0, add);
  //   } else {
  //     complete.splice(destination.index, 0, add);
  //   }

  //   setCompletedTodos(complete);
  //   setTodos(active);
  // };
  // console.log("completed todos",completedTodos)

  const { value, error, onChange, setError } = useInput('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value.trim()) {
      setError(true)
    } else {
      setError(false)
    }
  }
  return (
    <>
      {/* // <DragDropContext onDragEnd={onDragEnd}>
    //   <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}/>
    //   <h3>show list todos</h3>
    //   <TodosList 
    //     todos={todos}
    //     handleToggleTick={handleToggleTick}
    //     handleDeleteTodo={handleDeleteTodo}
    //     handleUpdateTodosAfterEdit={handleUpdateTodosAfterEdit}
    //   />
    // </DragDropContext> */}
      <WithResizeAdvancedUsage name="Developer" />
      {/* <ControlledInput 
        initialValue="init"
        name="test"
        type="text"
        
      /> */}
    <div className="page-center">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          name="name"
          value={value}
          error={error}
          onChange={onChange}
          placeholder="Please enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
