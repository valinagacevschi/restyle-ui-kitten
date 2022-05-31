import { BaseTheme } from '@shopify/restyle'
import * as defaultColors from '@eva-design/material/themes/dark.json'
import { IconPack } from '@ui-kitten/components'

export type ThemeName = 'light' | 'dark'
export type Themes = Record<ThemeName, Record<string, string> | undefined>

export type ThemeContextValue = {
  currentTheme: ThemeName
  toggleTheme: () => void
  isDarkMode: () => boolean
}

type IconsProp = IconPack<unknown> | IconPack<unknown>[]

export interface ThemeProviderProps {
  iconPack?: IconsProp
  appMappings?: Record<string, unknown>
  appThemes?: Themes
  restyle?: Theme
  children: React.ReactNode
}

type Colors = typeof defaultColors
type Spacing = Record<
  'xxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxl',
  number
>
export interface Theme extends Exclude<BaseTheme, 'colors' | 'spacing'> {
  colors: Colors
  spacing: Spacing
}

export type ProvidersProps = {
  theme?: Theme
  children: React.ReactNode | React.ReactNode[]
}
