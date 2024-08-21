import { Link } from 'react-router-dom'
import styled from 'styled-components'


export default function LinkLogin({ caminho, children }) {
  return <>
  <StyledLink to={caminho}>{children}</StyledLink>
  </>
}

const StyledLink = styled(Link)`
font-family: Lexend Deca;
font-weight: 400;
font-size: 13.98px;
line-height: 17.47px;
color: #52B6FF;
margin: 25px;
`

