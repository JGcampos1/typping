import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --primary-color:#6C63FF;
    --secundary-color:#FFFFFF;
    --primary-color-hover:#2EA672;
    --text-color:#322153;
  }
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  html,body,#root{
    min-height:100%;
  }
  body{
    background:#f0f0f5;
    color:var(--text-color);
    -webkit-font-smoothing:antialiased !important;
  }
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  margin: 0;

}
  
  
`;
