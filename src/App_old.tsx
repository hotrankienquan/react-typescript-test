import "./App.css";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Header from "./components/Header";
import List from "./components/List";
import Section from "./components/Section";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import InputField from "./components/InputField";

interface User {
  username?: string;
  password: string;
}
function App() {
  let a = 0;
  a = a + 1;
  console.log(a);
  const [count, setCount] = useState<number>(1);
  //
  const [users, setUsers] = useState<User[] | null>(null);

  // useeffect
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  //usecallback
  const addTwo = useCallback((): void => {
    setCount((prev) => prev + 2);
  }, []);

  //useMemo : memoize a value
  type fiboFunc = (n: number) => number;
  const fb: fiboFunc = useCallback((n) => {
    if (n < 2) return n;
    return fb(n - 1) + fb(n - 2);
  }, []);
  //
  const myNumber: number = 11;
  const result = useMemo<number>(() => {
    return fb(myNumber);
  }, [fb]);
  console.log(">>> check result", result);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);


  const hobbies: string[] = ["coding","billiard"];
  console.log("hobbies",hobbies)

  interface ITodo {
    id:number;
    content:string;
    isDone:boolean;

  }
  const [todo,setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  console.log("todo in app",todo)
  return (
    <>
      <InputField todo={todo} setTodo={setTodo}/>
      <h3>show list todos</h3>
      {/*<Header title="tieu de 1" />*/}
      {/*<Section title="tieu de 2">children from app</Section>*/}
      {/*<Counter />*/}
      {/*<Counter2 setCount={setCount}>count:{count}</Counter2>*/}
      {/*<br />*/}

      {/*<List*/}
      {/*  items={["takoyakii", "hasaghi", "zoro"]}*/}
      {/*  render={(itemCustom) => <span key={itemCustom}>{itemCustom}</span>}*/}
      {/*/>*/}

      {/*<hr />*/}
      {/*{count}*/}
      {/*<button onClick={addTwo}>add two</button>*/}
      {/*<input ref={inputRef} type="text" />*/}
    </>
  );
}

export default App;
