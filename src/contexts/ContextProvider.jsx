import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [showFilterTema, setShowFilterTema] = useState(false)

  const formatDateToIndonesian = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <StateContext.Provider
      value={{
        showFilterTema,
        setShowFilterTema,
        formatDateToIndonesian,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContexts = () => useContext(StateContext)
