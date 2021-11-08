import React, { createContext, useState } from 'react'
import { Fetch_Characters } from './fetch/Fetch';

const AppContext = createContext();

export const ContextWrapper = ({children}) => {
    const characters = Fetch_Characters()

    const data = {characters}
    

    return (
        <AppContext.Provider value={{data}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext
