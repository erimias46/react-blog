import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ispending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url,{signal:abortCont.signal})
            .then((res) => {
                
                if (!res.ok) {
                    throw Error("Couldnt fetch that error");
                }
                return res.json();
            })
            .then((data) => {
                
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    
                }
                else {
                  setPending(false);
                setError(err.message);  
                }
                
            });
        return () => abortCont.abort();
    }, [url]);
    return {data,ispending,error}
}

export default useFetch;