import { createContext } from "react"
import { IGlobalContext, defaultGlobalContext } from "../types/IGlobalContext"
export const GlobalContext = createContext<IGlobalContext>(defaultGlobalContext);
