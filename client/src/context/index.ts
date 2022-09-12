import { createContext } from "react"
import {IAuthContext, defaultAuthState} from "../types/IAuthContext"
export const AuthContext = createContext<IAuthContext>(defaultAuthState);
