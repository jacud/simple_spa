export const save = (key: string, value: string) : void=> {
    localStorage.setItem(key, value);
}

export const get = (key: string) : any => {
    const value = localStorage.getItem(key);
    return value;
}
