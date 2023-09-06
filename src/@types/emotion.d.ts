import "@emotion/react";
import { lightTheme } from '../styles/themes/light'

declare module '@emotion/react' {
  type ThemeModel = typeof lightTheme
  export interface Theme extends ThemeModel {} 
}