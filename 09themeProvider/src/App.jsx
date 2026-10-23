import { useEffect, useState } from 'react'
import { Card, ThemeBtn } from './components'
import { ThemeProvider } from "./contexts/Theme"

function App() {
  const [theme, setTheme] = useState("light")

  const lightTheme = ()=>{
    setTheme("light")
  }

  const darkTheme = () => {
    setTheme("dark")
  }

  useEffect(() =>{
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
  },[theme])

  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
