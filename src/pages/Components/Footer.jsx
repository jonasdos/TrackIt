import styled from "styled-components";



export default function Footer () {
  

  return <>
  <Container>
    <ContainerContent>
      <div>
        <img src='src\assets\calendar_month_icon.svg'/>
        <h1>Habitos</h1>
      </div>
      <div>
        <img src='src\assets\event-available.svg'/>
        <h1>Hoje</h1>
      </div>
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
div {

  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  color: #D4D4D4;
  background-color: #FFFFFF;
  font-size: 17.98px;
  font-weight: 400;
  img {
    margin: 5px;
  }
}
div:first-child {
  background-color: #52B6FF;
  color: #FFFFFF
}
`