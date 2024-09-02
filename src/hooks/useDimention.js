import { useEffect, useState } from "react";


function useDimention(){
    const [windowsize,setwindowsize]=useState({
        width:undefined,
        height:undefined,
    });

    useEffect(()=>{

        const handleResize=()=>{
             setwindowsize({
                width:window.innerWidth,
                height:window.innerHeight,
             })
        }
       window.addEventListener("resize",handleResize);
       
       handleResize();

       return ()=>window.removeEventListener('resize',handleResize)
    },[])

    return windowsize
}

export default useDimention