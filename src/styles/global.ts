import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 0.5px ${props => props.theme['#3294F8']};
    }

    body {
        background-color: ${props => props.theme['base-background']};
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }

`