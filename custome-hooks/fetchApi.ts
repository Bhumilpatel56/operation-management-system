'use client'

import { useState , useEffect } from "react";

export function FetchApi<T>( url:string){
    const[data , setData] = useState<T | null>(null);
    const[loading, setLoading] = useState(true);
    const[error , setError]= useState(null);

    useEffect(()=>{
            if(!url) return console.log("url not  founde");

            const fetchData = async() => {
                try{
                    setLoading(true);
                    const res = await fetch(url);
                    if(!res.ok) throw new Error ("failed to fetch data");
                    const json = await res.json();
                    setData(json);
                    


                }catch(error){
                    

                }finally{
                    setLoading(false);
                }
            };
            fetchData();

    }, [url]);
    return {data , loading , error};
}


