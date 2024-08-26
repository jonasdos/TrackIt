
import styled from 'styled-components'


export default function CancelTrack({ children, onClick }) {
  return <>
  <Cancel onClick={onClick}>{children}</Cancel>
  </>
}

const Cancel = styled.p`
font-family: Lexend Deca;
font-weight: 400;
font-size: 15.98px;
line-height: 17.47px;
color: #52B6FF;
margin: 25px;
text-decoration: none;
`

