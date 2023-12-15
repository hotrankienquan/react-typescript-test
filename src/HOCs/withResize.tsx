/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";

const withResize = (Component: FC<any> )=> (props: any)=> {
  const  [innerWidth, setInnerWidth] = useState(0);

  const handleResize = ()=>{
   setInnerWidth(window.innerWidth);
  }

  useEffect(()=>{
   window.addEventListener('resize', handleResize);

   return ()=>{
     window.removeEventListener('resize', handleResize);
   }
  },[]); 

  return <Component {...props} windowInnerWidth={innerWidth} />
}
export default withResize;