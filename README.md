# restyle-ui-kitten
A package combining best of two worlds: one of the best design system for react and react native - [UI Kitten](https://github.com/akveo/react-native-ui-kitten) and [Restyle](https://github.com/Shopify/restyle), Shopify's library which provides a type-enforced system for building UI components in React Native with TypeScript.

Just wrap your main app in restyle-ui-kitten context provider, add the colors, mappings, iconPack and restyle config and off you go.
# Features
1. **Dark/Light Themes** - add a preferred color theme from [eva colors](https://colors.eva.design/) and even overwrite dark and light themes colors.
2. **UI Kitten Mapping** - add mapping to overwrite the default styles of the components. More about mapping you can find [here](https://akveo.github.io/react-native-ui-kitten/docs/components/using-mapping/overview#styled). Bear in mind that layout styles from mapping are static as the mapping is after all a json file.
3. **Restyle Theme** - You can add a `restyle` theme with `createTheme` to better control the layout. You can also add the colors from `dark/light` theme.
4. **IconPack** - You can add `eva-icons` iconPack or custom iconPacks built on `"@expo/vector-icons"` or `react-native-vector-icons`.
# Instalation
You can use either `npm` or `yarn` to add it to your project.
`yarn add restyle-ui-kitten` or `npm install restyle-ui-kitten`
- Supports `expo`, and `react-native`
- Built with TypeScript
Optionally, you may also install these for a custom `iconPack` and to build your own custom components:
```
yarn add @shopify/restyle @eva-design/eva @ui-kitten/components react-native-svg 
```
or 
```
npm install @shopify/restyle @eva-design/eva @ui-kitten/components react-native-svg 
```
# Quick Start
```javascript
import { ThemeProvider, useThemeContext } from 'restyle-ui-kitten'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import Navigation from 'navigation/.'
import { appMappings, appThemes, iconPack, restyle } from 'assets/.'

export default function App() {
  const { isDarkMode } = useThemeContext()
  return (
    <ThemeProvider iconPack={iconPack} appMappings={appMappings} appThemes={appThemes} restyle={restyle}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style={isDarkMode() ? 'light' : 'dark'} />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
```
And later in one of your screens...
```javascript
<View flex={1} justifyContent={'center'}>
  <Text alignSelf={'center'} category={'h1'}>Tab One</Text>
  <View m={'xxl'} borderTopWidth={1} borderTopColor='color-danger-200' />
  <Input marginHorizontal={'xxl'} borderRadius={32} />
  <Button
    m={'xl'}
    accessoryLeft={(props) => <Icon name='user' {...props} />}
    onPress={() => navigation.navigate('TabTwo')}>
    {'Go to TabTwo'}
  </Button>
</View>
```
# Documentation
## Import
The context provider and the theme custom hook can be imported directly.
```javascript
import { ThemeProvider, useThemeContext } from 'restyle-ui-kitten'
```
The `UI Kitten` components can be imported like this:
```javascript
import { View, Button, Text } from 'restyle-ui-kitten/components'
```
## Configuration examples
### UI Kitten Theme
```javascript
import { light, dark } from '@eva-design/material' // or /eva
import { default as colors } from './custom-theme.json'

export const appThemes: Themes = {
  light: { ...light, ...colors },
  dark: { ...dark, ...colors },
}
```
### UI Kitten Mapping
```javascript
import { mapping } from '@eva-design/material' // or /eva
import { default as customMapping } from './custom-mapping.json'

export const appMappings: Record<string, unknown> = {
  mapping,
  customMapping,
}
```
### Restyle Theme
```javascript
import { createTheme } from '@shopify/restyle'
import * as defaultColors from '@eva-design/material/themes/dark.json'

export const restyle = createTheme({
  colors: {
    ...defaultColors,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  textVariants: {
    defaults: {
      fontSize: 12,
      lineHeight: 14.5,
    },
  },
})

export type Theme = typeof restyle
```
### IconPack
```javascript
import { EvaIconsPack as iconPack } from '@ui-kitten/eva-icons'
```
or custom PNG icons
```javascript
import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

const IconProvider = (source: ImageRequireSource) => ({
  toReactElement: ({ animation, ...style }) => (
    <Image style={style} source={source}/>
  ),
});

export const AppIconsPack = {
  name: 'app',
  icons: {
    'auth': IconProvider(require('assets/images/icon-auth.png')),
    'auth-dark': IconProvider(require('assets/images/icon-auth-dark.png')),
    // ...
  }
}
```
# License
[MIT](https://github.com/valinagacevschi/restyle-ui-kitten/blob/main/LICENSE) license.