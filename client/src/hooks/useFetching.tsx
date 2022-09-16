import { useState } from "react"
import { Exception } from "sass";

export const useFetching = (callBack: CallableFunction) : [CallableFunction, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
