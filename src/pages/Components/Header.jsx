import styled from "styled-components";



export default function Header ({avatar}) {
  
  return <>
  <Container>
    <div>
    <h1>TrackIt</h1>
    <img src={avatar} />
    </div>
  </Container>
  </>
}

const Container = styled.header`
padding: 10px 20px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
height: 70px;
width: 100%;
background-color:#126BA5;

box-shadow: 0px 4px 4px 0px #00000026;
div {
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 750px;
}

img {
  border-radius: 50%;
  width: 50px;
}
h1 {
  font-size:38.98px ;
  font-family: Playball;
  color: #FFFF;
}
`