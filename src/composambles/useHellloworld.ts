import { useEffect, useState } from "react";

export default function useHelloWorld (){
 const [num, setNum] = useState (0)
 const [doblenum, Setdoblenum] = useState (0)

    useEffect(() => {
        Setdoblenum(Number(num * 2))
    },[num] )


    return [num, doblenum, setNum];
}