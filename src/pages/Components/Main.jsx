import { useState } from "react";
import styled from "styled-components";



export default function Main () {
  const [titulo, setTitulo] = useState('Meus Hábitos')

  return <>
  <Container>
    <ContainerContent>
    <Header>
    <h1>{titulo}</h1>
    <BtnAddTrack>+</BtnAddTrack>
    </Header>
    </ContainerContent>
  </Container>
  </>
}

const Container = styled.main`
margin-top: 70px;
padding: 10px 20px;
height: calc(100vh - 70px);
width: 100%;
background-color: #F2F2F2;
display: flex;
flex-direction: column;
align-items: center;
font-family: Lexend Deca;


`
const ContainerContent = styled.div`
display: flex;
max-width: 750px;

width: 100%;
`
const Header = styled.header`
color: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-size: 22.98px;
line-height: 22.47px;
font-weight: 400;
margin-top: 30px ;
margin-bottom: 20px;
`

const BtnAddTrack = styled.div`
width: 40px;
height: 35px;
background-color: #52B6FF;
color:#FFFF;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
font-weight: 300;
transition: 0.3s;
&:hover {
  background-color:#52ceff ;
}
&:active {
  color: black
}
`
