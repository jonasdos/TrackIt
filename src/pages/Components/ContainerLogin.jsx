
import styled from "styled-components"

export default function ContainerLogin({children}) {
  return <>
  <Container>{children}</Container>
  
  </>
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 70px 35px;
`