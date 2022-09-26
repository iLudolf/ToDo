import 'styled-components'
import darkTheme from '../global/theme/darkTheme'

declare module 'styled-components' {
  type ThemeType = typeof darkTheme

  export interface DefaultTheme extends ThemeType {}
}