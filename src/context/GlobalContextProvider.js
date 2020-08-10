import React from "react"
import { createContext } from "react"

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

function globalProvider({ children }) {
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default globalProvider
