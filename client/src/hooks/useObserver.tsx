import { RefObject, useEffect, useRef } from "react";

export const useObserver = (ref: RefObject<HTMLDivElement>, canLoad: boolean, isLoading: boolean, callBack: CallableFunction) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        if (isLoading || !ref.current) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        const callback : IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callBack();
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current);
        return () => {
            observer.current?.disconnect();
        }
    }, [isLoading]);
}