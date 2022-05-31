import React from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import * as design from '@eva-design/material'

import { RestyleProvider, ThemeContext, useTheming } from './theme.context'
import { ThemeProviderProps } from '../types'

export function ThemeProvider({
  iconPack,
  appMappings,
  appThemes = design,
  restyle,
  children,
}: ThemeProviderProps): JSX.Element {
  const [themeContext, currentTheme] = useTheming(appThemes)
  return (
    <>
      {iconPack ? <IconRegistry icons={iconPack} /> : null}
      <ApplicationProvider {...design} {...appMappings} theme={currentTheme}>
        <ThemeContext.Provider value={themeContext}>
          <RestyleProvider theme={restyle}>{children}</RestyleProvider>
        </ThemeContext.Provider>
      </ApplicationProvider>
    </>
  )
}
