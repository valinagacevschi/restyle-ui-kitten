import { createContext, useContext, useEffect, useState } from 'react'
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTheme } from '@ui-kitten/components'
import { ThemeProvider } from '@shopify/restyle'
import { ProvidersProps, ThemeContextValue, ThemeName, Themes } from '../types'

const initialTheme: ThemeContextValue = {
  currentTheme: 'light',
  toggleTheme: () => undefined,
  isDarkMode: () => false,
}

export const ThemeContext = createContext(initialTheme)

export const useTheming = (
  themes?: Themes,
): [ThemeContextValue, Record<string, string>] => {
  const colorScheme = useColorScheme() as NonNullable<ColorSchemeName>
  const [currentTheme, setNextTheme] = useState<ThemeName>(colorScheme)

  useEffect(() => {
    const loadColorShemeAsync = async () => {
      const colorScheme = ((await AsyncStorage.getItem('theme')) ??
        Appearance.getColorScheme()) as NonNullable<ColorSchemeName>
      setNextTheme(colorScheme)
    }
    loadColorShemeAsync()
  }, [])

  const isDarkMode = (): boolean => {
    return currentTheme === 'dark'
  }

  const themeContext: ThemeContextValue = {
    currentTheme,
    toggleTheme: () => {
      AsyncStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark').then(() =>
        setNextTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark')),
      )
    },
    isDarkMode,
  }

  return [themeContext, themes?.[currentTheme] ?? {}]
}

export const useThemeContext = (): ThemeContextValue => useContext(ThemeContext)

export const RestyleProvider = ({ theme, children }: ProvidersProps) => {
  const colors = useTheme()
  const dynamicTheme = {
    ...(theme ?? {}),
    colors: {
      ...colors,
    },
  }
  return <ThemeProvider theme={dynamicTheme}>{children}</ThemeProvider>
}
