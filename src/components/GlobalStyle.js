import { createGlobalStyle } from "styled-components";
import 'modern-normalize';
import background from "../img/ponebook.jpg";


export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
    background-image:  url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
           }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
}
`;