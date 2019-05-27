import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;

        font-size: 18px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #root {
        height: 100%;
    }
`;