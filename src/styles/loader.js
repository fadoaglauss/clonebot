import styled from 'styled-components'

export const Loader = styled.div`
  border: 10px solid ${props => props.theme.colors.secundary};
  border-top: 10px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin: 0 auto !important;
  float: none !important;
`

export const LoadingText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.font};
`
