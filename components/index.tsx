import { Pressable as RNPressable, PressableProps } from 'react-native'
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
  LayoutProps,
  createRestyleComponent,
  createBox,
  createVariant,
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

export const View = createBox<Theme>()
export const Avatar = createBox<Theme, BoxProps<Theme> & UIAvatarProps>(UIAvatar)
export const Layout = createBox<Theme, BoxProps<Theme> & UILayoutProps>(UILayout)
export const Button = createBox<Theme, BoxProps<Theme> & UIButtonProps>(UIButton)
export const ButtonGroup = createBox<Theme, BoxProps<Theme> & UIButtonGroupProps>(
  UIButtonGroup,
)
export const Calendar = createBox<Theme, BoxProps<Theme> & UICalendarProps>(UICalendar)
export const Card = createBox<Theme, BoxProps<Theme> & UICardProps>(UICard)
export const CheckBox = createBox<Theme, BoxProps<Theme> & UICheckBoxProps>(UICheckBox)
export const Divider = createBox<Theme, BoxProps<Theme> & UIDividerProps>(UIDivider)
export const Datepicker = createBox<Theme, BoxProps<Theme> & UIDatepickerProps>(
  UIDatepicker,
)
export const List = createBox<Theme, BoxProps<Theme> & UIListProps>(UIList)
export const ListItem = createBox<Theme, BoxProps<Theme> & UIListItemProps>(UIListItem)
export const Modal = createBox<Theme, BoxProps<Theme> & UIModalProps>(UIModal)
export const MenuItem = createBox<Theme, BoxProps<Theme> & UIMenuItemProps>(UIMenuItem)
export const Popover = createBox<Theme, BoxProps<Theme> & UIPopoverProps>(UIPopover)
export const RangeCalendar = createBox<Theme, BoxProps<Theme> & UIRangeCalendarProps>(
  UIRangeCalendar,
)
export const Radio = createBox<Theme, BoxProps<Theme> & UIRadioProps>(UIRadio)
export const Select = createBox<Theme, BoxProps<Theme> & UISelectProps>(UISelect)
export const SelectGroup = createBox<Theme, BoxProps<Theme> & UISelectGroupProps>(
  UISelectGroup,
)
export const SelectItem = createBox<Theme, BoxProps<Theme> & UISelectItemProps>(
  UISelectItem,
)
export const Tab = createBox<Theme, BoxProps<Theme> & UITabProps>(UITab)
export const TabBar = createBox<Theme, BoxProps<Theme> & UITabBarProps>(UITabBar)
export const Toggle = createBox<Theme, BoxProps<Theme> & UIToggleProps>(UIToggle)
export const ViewPager = createBox<Theme, BoxProps<Theme> & UIViewPagerProps>(UIViewPager)

export const Pressable = createBox<Theme, BoxProps<Theme> & PressableProps>(RNPressable)

export const Input = createBox<Theme, BoxProps<Theme> & UIInputProps>(UIInput)
