import { styled } from "styled-components";

export default function Button({onClick, children}) {

  return  <>
  <Container onClick={onClick}>{children}</Container>
  </>
}

const Container = styled.button`
background-color: #52B6FF;
padding: 10px;
border-radius: 5px;
border: 2px solid #D4D4D4;
display: block;
margin: 5px;
width: 300px;

font-size: 20.98px;
color: #FFFFFF;
transition: background-color 0.3s;
outline: none;
&:hover {
background-color: #52ceff;
cursor: pointer;}
&:focus {
  border: solid 2px #E4CA95;
  
}
`