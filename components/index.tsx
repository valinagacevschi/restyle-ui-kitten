import React from 'react'
import { Pressable as RNPressable, PressableProps } from 'react-native'
import * as Haptics from 'expo-haptics'
import {
  color,
  opacity,
  visible,
  layout,
  spacing,
  spacingShorthand,
  typography,
  textShadow,
  BoxProps,
  TextProps,
  TextShadowProps,
  LayoutProps,
  createRestyleComponent,
  createBox,
  createVariant,
  composeRestyleFunctions,
  ColorProps,
  OpacityProps,
  VisibleProps,
  TypographyProps,
  SpacingProps,
  SpacingShorthandProps,
  BorderProps,
  backgroundColorShorthand,
  backgroundColor,
  border,
  shadow,
  useRestyle,
} from '@shopify/restyle'
import {
  Avatar as UIAvatar,
  AvatarProps as UIAvatarProps,
  Text as UIText,
  TextProps as UITextProps,
  Button as UIButton,
  ButtonProps as UIButtonProps,
  ButtonGroup as UIButtonGroup,
  ButtonGroupProps as UIButtonGroupProps,
  Calendar as UICalendar,
  CalendarProps as UICalendarProps,
  RangeCalendar as UIRangeCalendar,
  RangeCalendarProps as UIRangeCalendarProps,
  Layout as UILayout,
  LayoutProps as UILayoutProps,
  Divider as UIDivider,
  DividerProps as UIDividerProps,
  Datepicker as UIDatepicker,
  DatepickerProps as UIDatepickerProps,
  Card as UICard,
  CardProps as UICardProps,
  CheckBox as UICheckBox,
  CheckBoxProps as UICheckBoxProps,
  Input as UIInput,
  InputProps as UIInputProps,
  List as UIList,
  ListProps as UIListProps,
  ListItem as UIListItem,
  ListItemProps as UIListItemProps,
  MenuItem as UIMenuItem,
  MenuItemProps as UIMenuItemProps,
  Modal as UIModal,
  ModalProps as UIModalProps,
  Popover as UIPopover,
  PopoverProps as UIPopoverProps,
  Radio as UIRadio,
  RadioProps as UIRadioProps,
  Select as UISelect,
  SelectProps as UISelectProps,
  SelectGroup as UISelectGroup,
  SelectGroupProps as UISelectGroupProps,
  SelectItem as UISelectItem,
  SelectItemProps as UISelectItemProps,
  Tab as UITab,
  TabProps as UITabProps,
  TabBar as UITabBar,
  TabBarProps as UITabBarProps,
  Toggle as UIToggle,
  ToggleProps as UIToggleProps,
  ViewPager as UIViewPager,
  ViewPagerProps as UIViewPagerProps,
} from '@ui-kitten/components'
import { Theme } from '../types'

const textRestyleFunctions = [
  color,
  opacity,
  visible,
  typography,
  spacing,
  spacingShorthand,
  layout,
  textShadow,
  createVariant({ themeKey: 'textVariants' }),
]

export const Text = createRestyleComponent<
  TextProps<Theme> & LayoutProps<Theme> & UITextProps,
  Theme
>(textRestyleFunctions, UIText)

type Pressable = { 
  onPress?: ((args: any) => void) | null 
  onSelect?: (selected: any) => void
}
const withHaptics = <P extends Pressable>(Component: React.ComponentType<P>, force = false) => ({ onPress, onSelect, ...props }: any) => {
  const onHapticPress = (args: any) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    onPress?.(args)
  }
  const onHapticSelect = (selected: any) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    onSelect?.(selected)
  }

  return (<Component 
    onSelect={force || onSelect ? onHapticSelect : undefined}
    onPress={force || onPress ? onHapticPress : undefined}
    {...props} 
  />)
}

export const View = createBox<Theme>()
export const Avatar = createBox<Theme, BoxProps<Theme> & UIAvatarProps>(UIAvatar)
export const Layout = createBox<Theme, BoxProps<Theme> & UILayoutProps>(UILayout)
export const Button = createBox<Theme, BoxProps<Theme> & UIButtonProps>(
  withHaptics<UIButtonProps>(UIButton)
)
export const ButtonGroup = createBox<Theme, BoxProps<Theme> & UIButtonGroupProps>(
  UIButtonGroup,
)
export const Calendar = createBox<Theme, BoxProps<Theme> & UICalendarProps>(
  withHaptics<UICalendarProps>(UICalendar)
)
export const Card = createBox<Theme, BoxProps<Theme> & UICardProps>(
  withHaptics<UICardProps>(UICard)
)
export const CheckBox = createBox<Theme, BoxProps<Theme> & UICheckBoxProps>(UICheckBox)
export const Divider = createBox<Theme, BoxProps<Theme> & UIDividerProps>(UIDivider)
export const List = createBox<Theme, BoxProps<Theme> & UIListProps>(UIList)
export type ListItemProps = BoxProps<Theme> & UIListItemProps
export const ListItem = createBox<Theme, BoxProps<Theme> & UIListItemProps>(
  withHaptics<UIListItemProps>(UIListItem)
)
export const Modal = createBox<Theme, BoxProps<Theme> & UIModalProps>(UIModal)
export const MenuItem = createBox<Theme, BoxProps<Theme> & UIMenuItemProps>(
  withHaptics<UIMenuItemProps>(UIMenuItem)
)
export const Popover = createBox<Theme, BoxProps<Theme> & UIPopoverProps>(UIPopover)
export const RangeCalendar = createBox<Theme, BoxProps<Theme> & UIRangeCalendarProps>(
  withHaptics<UIRangeCalendarProps>(UIRangeCalendar)
)
export const Radio = createBox<Theme, BoxProps<Theme> & UIRadioProps>(UIRadio)
export const Select = createBox<Theme, BoxProps<Theme> & UISelectProps>(
  withHaptics<UISelectProps>(UISelect)
)
export const SelectGroup = createBox<Theme, BoxProps<Theme> & UISelectGroupProps>(
  UISelectGroup,
)
export const SelectItem = createBox<Theme, BoxProps<Theme> & UISelectItemProps>(
  withHaptics<UISelectItemProps>(UISelectItem)
)
export const Tab = createBox<Theme, BoxProps<Theme> & UITabProps>(
  withHaptics<UITabProps>(UITab)
)
export const TabBar = createBox<Theme, BoxProps<Theme> & UITabBarProps>(UITabBar)
export const Toggle = createBox<Theme, BoxProps<Theme> & UIToggleProps>(
  withHaptics<UIToggleProps>(UIToggle)
)
export const ViewPager = createBox<Theme, BoxProps<Theme> & UIViewPagerProps>(UIViewPager)

export const Pressable = createBox<Theme, BoxProps<Theme> & PressableProps>(
  withHaptics<PressableProps>(RNPressable)
)

const viewRestyleFunctions = [
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  visible,
  layout,
  spacing,
  spacingShorthand,
  shadow,
  border,
  // createVariant({ themeKey: 'textVariants' }),
]

type RestyleProps = ColorProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  TypographyProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  TextShadowProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  color,
  opacity,
  visible,
  typography,
  spacing,
  spacingShorthand,
  textShadow,
  border,
])

export const Datepicker = ({ onPress, onSelect, ...props }: BoxProps<Theme> & UIDatepickerProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  const { style } = useRestyle(restyleFunctions, props)
  const Component = createRestyleComponent<BoxProps<Theme> & UIDatepickerProps, Theme>(
    viewRestyleFunctions,
    withHaptics<UIDatepickerProps>(UIDatepicker, true),
  )
  return <Component { ...props } controlStyle={style} />
}

type InputProps = UIInputProps & TextProps<Theme>

export const Input = (props: BoxProps<Theme> & InputProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  const { style } = useRestyle(restyleFunctions, props)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textStyles = {} as any
  typography.map((t) => {
    textStyles[t.property] = props[t.property]
  })
  const Component = createRestyleComponent<BoxProps<Theme> & InputProps, Theme>(
    viewRestyleFunctions,
    UIInput,
  )
  return <Component {...{ ...props }} textStyle={style} />
}
