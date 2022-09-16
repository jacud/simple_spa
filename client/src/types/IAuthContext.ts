export interface  IAuthContext {
    isAuth: boolean;
    setAuth: (isAuth: boolean) => void | React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
}

export const defaultAuthState : IAuthContext = {
    isAuth: false,
    setAuth: () => {
        return;
    },
    isLoading: false
}