import { useEffect, useState } from "react";

export const useFetch = (fn)=>{

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    async function load(){
        setLoading(true);
        const res = await fn();
        setResponse(res);
        setLoading(false);
    }

    useEffect(()=>{
        load()
    }, [])

    return {
        loading,
        response
    }
}

export default useFetch;