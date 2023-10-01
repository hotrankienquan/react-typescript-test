

import React,{ReactNode} from 'react'
type Counter2Props = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}
const Counter2 = ({setCount, children}: Counter2Props) => {
  return (
    <>
        <h3>{children}</h3>
        <button onClick={()=>setCount((prev) => prev + 1)}>increase one</button>
        <button onClick={()=>setCount(prev => prev-1)}>decrease one</button>
    </>
  )
}

export default Counter2