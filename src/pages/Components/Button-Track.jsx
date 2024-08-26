import { styled } from "styled-components";

export default function Button({onClick, children}) {

  return  <>
  <Container onClick={onClick}>{children}</Container>
  </>
}

const Container = styled.button`
background-color: #52B6FF;
padding: 8px 17px;
border-radius: 5px;
border: 2px solid #D4D4D4;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
height: 35px;
width: 84px;
font-size: 15.98px;
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