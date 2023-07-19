import { useState, useEffect } from 'react';

interface useEffectProps {
    url:string
}

export const useFetch  = <T>({url}:useEffectProps) => {

    const [data, setData]= useState<T | null>(null)
    const [hasError, setHasError] = useState(false)
    const [isFetching, setIsFetching] = useState(false)


    const fetchData = async (e?:React.FormEvent<HTMLFormElement>) => {
        //desactiva la recarga del submit
        e?.preventDefault();

        setIsFetching(true)
        try {
            const response = await fetch(url)
            const dataBuffer = await response.json();
            setData (dataBuffer);
            setIsFetching((false));
        } catch (error) {
            setHasError(true);
            setIsFetching(false);
        }
    }

    //dispara el uso del fetchData
    useEffect(() => {
        (async() => {
            await fetchData();
        })();
    }, [])
    

    return{
        data,
        fetchData,
        hasError,
        isFetching
    }
}