import { darkTheme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 }
 body{
  background-color: ${({ theme }) => theme.bgColor};
 }
 a{
   color: inherit;
   text-decoration: none;
 }
 li{
   list-style: none;
 }
 button{
   border: none;
   outline: none;
    cursor: pointer;
 }
 input{
   border: none;
   outline: none;
   &:focus{
     outline: none;
   }
}

p,a,span{
  color:${({ theme }) => theme.txtColor}
}
`;

export default function App({ Component, pageProps }: AppProps) {
  const query = new QueryClient();
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <QueryClientProvider client={query}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
