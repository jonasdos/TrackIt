import { useEffect, useState } from "react";
import styled from "styled-components";
import TrackAdd from "./TrackAdd";
import axios from 'axios'
import Tracks from "./Track";

export default function Main ({userData}) {
  const [titulo, setTitulo] = useState('Meus Hábitos')
  const [msgAddHabitos, setMsgAddHabitos] = useState('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!')
  const [activeAddBtn, setActiveAddBtn] = useState(false)
  const [newHabito, setNewHabito] = useState('')
  const [habito, setHabito] = useState(true)
  const [alerta, setalerta] = useState('')
  const [newTrack, setNewTrack] = useState('')
  const [existeTrack, setExisteTrack] = useState(false)

  function ligaNewTrack() {
    setNewHabito('')
    setActiveAddBtn(!activeAddBtn)
    setHabito(true)
    setalerta('')
  }

  function salvarHabito(diasMarcados) {
    
    newHabito === ''? setalerta('Precisa nomear o habito e escolher os dias') : setalerta('')
    const dias = []
    const extrai = diasMarcados.map((dia,i) => dia.selecionado === true ? dias.push(i) :  '')
    const dadosTrack = {name: newHabito, days: dias}
    dias.length === 0 ? setalerta('Precisa nomear o habito e escolher os dias') : setNewTrack(dadosTrack)

    if(dadosTrack.name.length>0 && dadosTrack.days.length>0 ) {
      
      const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
      const body = dadosTrack
      const config = {
        headers: {
          Authorization: `Bearer ${userData}`
        }
      }
      EnviaDados(URL, body, config)
    } 
    function EnviaDados(URL, body, config) {
      
        axios.post(URL, body, config)
        .then(res => {
          setActiveAddBtn(!activeAddBtn)
         
        })
        .catch(err => console.log(err.data))

      
    }
  }

function sinalizaTrack(valor) {
  setExisteTrack(valor)
  
}

  
  return <>
  <Container>
    <ContainerContent>
    <Header>
    <h1>{titulo}</h1>
    <BtnAddTrack onClick={() =>setActiveAddBtn(!activeAddBtn)}>+</BtnAddTrack>
    </Header>
    </ContainerContent>
    {activeAddBtn && 
    <TrackAdd 
    placeholder={'nome do hábito'}
    value={newHabito}
    onChange={(e) => setNewHabito(e.target.value)}
    onclickCancel={ligaNewTrack}
    onclickSave={salvarHabito}
    inputTrack={habito}
    inputTrackMsg={alerta}
    />}
    
    
    <Tracks userData={userData}  carregatracks={sinalizaTrack}/> 
    <Msg $disp={sinalizaTrack}><p>{msgAddHabitos}</p></Msg>
    

    
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
max-width: 700px;
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
const Msg = styled.div`
display: ${props => props.$disp === false ? 'block': 'none'};
width: 100%;
max-width: 700px;
p {
  font-size: 17.98px;
  font-weight: 400;
 line-height: 22.47px;
 color: #666666;
max-width: 340px;
 margin: 30px 0px;

}
`

