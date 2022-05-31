import { createGlobalStyle } from 'styled-components';
import { device } from '../utils';

export const GlobalStyles = createGlobalStyle`
  *:focus{
    outline: none;
  }
  * {
    padding:0;
    margin:0;

  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;
    font-size: 16px;
    @media only screen and ${device.sm} {
      font-size: 12px;
    }

    @media only screen and ${device.md} {
      font-size: 14px;
    }
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  *::placeholder {
    color: ${({ theme }) => theme.placeHolder};
}
`;
