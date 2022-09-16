import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContext } from "./context/globalContext";
import { defaultGlobalContext } from "./types/IGlobalContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <GlobalContext.Provider value={ defaultGlobalContext }>
        <App />
    </GlobalContext.Provider>
);
