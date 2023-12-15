/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";

type Params =  {
  bumped: number;
}
const withResizeAdvanced = (params: Params)=> (Component: FC<any> )=> (props: any)=> {
    console.log(params);
    const  [innerWidth, setInnerWidth] = useState(0);
    console.log(innerWidth, window.innerWidth)
    const handleResize = ()=>{
     setInnerWidth(window.innerWidth+params.bumped);
    }

    useEffect(()=>{
     window.addEventListener('resize', handleResize);

     return ()=>{
       window.removeEventListener('resize', handleResize);
     }
    },[]); 

    return <Component {...props} windowInnerWidth={innerWidth} />
}
export default withResizeAdvanced;