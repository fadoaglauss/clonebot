import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body {
        font-family: "Fira Sans";
        background: ${props => props.theme.colors.background};
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 2px solid ${props => props.theme.colors.primary};
        background: transparent;
        color: white;
        border-radius: 4px;
        resize: none;
      }
      
      input:focus, textarea:focus {
        outline: none;
      }

`
