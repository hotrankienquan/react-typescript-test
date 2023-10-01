

import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(1)
    
  return (
    <div>
        current count : {count}

        <button onClick={()=>setCount((prev) => prev + 1)}>increase one</button>
        <button onClick={()=>setCount(prev => prev-1)}>decrease one</button>
    </div>
  )
}

export default Counter