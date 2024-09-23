import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProps={
    children:React.ReactNode
}
export const ThemeContext = createContext(theme)

export const ThemcontextProvider=({children}:ThemeContextProps)=>{
       return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
