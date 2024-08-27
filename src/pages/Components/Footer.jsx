import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export default function Footer () {
  const location = useLocation()
  const [page, setPage] = useState('habitos')
  const navigate = useNavigate()

useEffect(() => {
  location.pathname === '/hoje'? setPage('hoje') : setPage('habitos')
}, [])
function paraHoje() {
 
  navigate('/hoje')
}
function paraHabitos() {
 
  navigate('/habitos')
}
  
  
  return <>
  <Container>
    <ContainerContent>
      <Habitos onClick={() => paraHabitos()} color={page}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10V12H7V10H9ZM13 10V12H11V10H13ZM17 10V12H15V10H17ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H6V1H8V3H16V1H18V3H19ZM19 19V8H5V19H19ZM9 14V16H7V14H9ZM13 14V16H11V14H13ZM17 14V16H15V14H17Z" fill="currentColor"/>
</svg>
        <h1>Habitos</h1>
      </Habitos>
      <Hoje onClick={() => paraHoje()} color={page}>
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_35303_43)">
<path d="M13 9.53C12.71 9.24 12.23 9.24 11.94 9.53L7.59 13.88L6 12.29C5.71 12 5.23 12 4.94 12.29C4.65 12.58 4.65 13.06 4.94 13.35L6.88 15.29C7.27 15.68 7.9 15.68 8.29 15.29L12.99 10.59C13.29 10.3 13.29 9.82 13 9.53ZM16 2H15V1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM15 18H3C2.45 18 2 17.55 2 17V7H16V17C16 17.55 15.55 18 15 18Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_35303_43">
<rect width="18" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
        <h1>Hoje</h1>
      </Hoje>
    </ContainerContent>
  </Container>
  </>
}

const Container = styled.footer`

display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
height: 65px;
width: 100%;
 ;

`
const ContainerContent = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100%;
max-width: 750px;
font-family: Lexend Deca;
`
const Habitos = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  color: ${props => props.color === 'habitos' ? '#FFFFFF' : '#D4D4D4'};
  background-color: ${props => props.color === 'habitos' ? '#52B6FF':'#FFFFFF' };
  font-size: 17.98px;
  font-weight: 400;
  svg {
    margin: 5px;
    
  }
`
const Hoje = styled.div` 
  background-color: ${props => props.color === 'hoje' ? '#52B6FF':'#FFFFFF'};
  color: ${props => props.color === 'habitos' ?  '#D4D4D4' : '#FFFFFF'};
  font-size: 17.98px;
  font-weight: 400;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 5px;
  }
`
