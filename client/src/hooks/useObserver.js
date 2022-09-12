import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callBack) => {
    const observer = useRef();
    useEffect(() => {
        if (isLoading || !ref.current) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        const callback = (entries, observer) => {
        if (entries[0].isIntersecting && canLoad) {
            callBack();
        }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current);
        return () => {
        observer.current.disconnect();
        }
  }, [isLoading]);
}