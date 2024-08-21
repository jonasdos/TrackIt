import style, { styled } from "styled-components";

export default function Button({ children}) {

  return  <>
  <Container>{children}</Container>
  </>
}

const Container = styled.button`
background-color: #52B6FF;
padding: 10px;
border-radius: 5px;
border: 1px solid #D4D4D4;
display: block;
margin: 5px;
width: 100%;
max-width: 450px;
min-width: 300px;
font-size: 20.98px;
color: #FFFFFF;
`