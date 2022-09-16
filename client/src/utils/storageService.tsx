export const save = (key: string, value: string) : void=> {
    localStorage.setItem(key, value);
}

export const get = (key: string) : string | null => {
    const value = localStorage.getItem(key);
    return value;
}
