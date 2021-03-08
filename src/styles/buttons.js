import styled from 'styled-components'

export const StyledButton = styled.button`
    border: 0;
    background: ${props => props.background[props.theme.title]};
    color: white;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: bold;
    outline: none;
    opacity: 1;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.5;
  }
`

StyledButton.defaultProps = {
  background: {
    light: '#00C6D7',
    dark: '#125AD5',
  },
}
