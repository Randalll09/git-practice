import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    txtColor: string;
    highlightColor: string;
    mainColor: string;
    bgColor: string;
    tabColor: string;
    errorColor: string;
    transition: string;
  }
}
