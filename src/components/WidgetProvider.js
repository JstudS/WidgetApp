import React, { createContext, useContext, useState } from 'react'

const WidgetContext = createContext()

const WidgetProvider = ({children}) => {
    const [widgets, setWidgets] = useState({})

    const addWidget = (id, widget) => {
        setWidgets((prevWidget) => ({...prevWidget, [id]: widget}))
    }

    const removeWidget = (id) => {
        setWidgets((prevWidget) => {
            const newWidget = { ...prevWidget }
            delete newWidget[id]
            return newWidget
        })
    }
  return (
    <WidgetContext.Provider value={{widgets, addWidget, removeWidget}}>
        {children}
    </WidgetContext.Provider>
  )
}

export default WidgetProvider
export const useWidgetContext = () => useContext(WidgetContext)