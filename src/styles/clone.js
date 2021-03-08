import styled from 'styled-components'

export const Home = styled.div`
  padding: 15px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.font};

  h1 {
    margin: 0 0 30px 0;
  }

  a,
  a:hover {
    color: #ebb22d;
  }
`

export const Input = styled.input`
  color: ${props => props.theme.colors.font};
`
