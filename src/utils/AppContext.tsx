import React from "react";

interface ContextInterface {
    [key: string]: unknown // placeholder
}

const AppContext = React.createContext<ContextInterface>({} as ContextInterface);

export default AppContext;