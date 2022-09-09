import { useState } from "react"
import { Exception } from "sass";

interface fecthCallbackType { (...params : any[]): void }

export const useFetching = (callBack: fecthCallbackType) : [(...params: any[]) => Promise<void>, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...params : any[]) : Promise<void> => {
        try {
            setIsLoading(true);
            await callBack(...params);
        } catch (e : unknown) {
            setError((e as Exception).message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}
