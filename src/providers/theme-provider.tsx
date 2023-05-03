import { ReactNode } from "react";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { themes } from "../theme/themes";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({children}: ThemeProviderProps){
  return (
    <StyleThemeProvider theme={themes} >{children}</StyleThemeProvider>
  )
}