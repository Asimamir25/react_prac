import { createContext, useState } from "react";
export const ThemeContext=createContext()
export const ThemeProvider=({children})=>{
      const [theme, setTheme] = useState(true);
    const ToggleTheme=()=>{
    setTheme(prev=>!prev)
}
return(
    <ThemeContext.Provider value={{theme,ToggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}