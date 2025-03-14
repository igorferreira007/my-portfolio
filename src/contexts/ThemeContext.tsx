import { createContext, useEffect, useState } from "react"

interface Theme {
  changeTheme: () => void
  currentTheme: string
}

interface ThemeContextProviderProps {
  children: React.ReactNode
}

export const ThemeContext = createContext({} as Theme)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("@igorferreira:theme") || "dark"
  })

  function changeTheme() {
    setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark")
    localStorage.setItem("@igorferreira:theme", currentTheme)
  }, [currentTheme])

  return <ThemeContext.Provider value={{changeTheme, currentTheme}}>{children}</ThemeContext.Provider>
}
