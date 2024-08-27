import { useEffect, useState } from "react";
import styled from "styled-components";
import TrackAdd from "./TrackAdd";
import axios from 'axios'
import Tracks from "./Track";
import formatarDataAtual from "../scripts/diaHoje";

export default function MainHoje ({userData}) {
  const [titulo, setTitulo] = useState(() =>formatarDataAtual())
  const [tracks, setTracks] = useState([])
  const config = {
    headers: {
      Authorization: `Bearer ${userData}`
    }
  }
  useEffect(() => {
    atualizaTracks();
  }, [])
  function atualizaTracks() {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
    .then(res => setTracks(res.data))
    .catch(err => console.log(err));
  }
  
function enviaTarefaConcluida(id, done) {
const check = (done ? 'uncheck': 'check')

   axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${check}`, {}, config)
    .then(res => atualizaTracks(res.data))
    .catch(err => console.log(err.data))
  }


  return <>
  <Container>
    <ContainerContent>
    <Header>
    <h1>{titulo}</h1>
    </Header>
    </ContainerContent>
    <ContainerContent>
      {tracks.map((track, index) => 
      <Track key={index}>
      <div>
        <h1>{track.name}</h1>
        <h2>Sequência atual: {track.currentSequence} {track.currentSequence>1 ? 'dias': 'dia'}</h2>
        <h2>Seu recorde: {track.highestSequence} {track.highestSequence>1 ? 'dias': 'dia'}</h2>
      </div>
      <Icon onClick={() => enviaTarefaConcluida(track.id, track.done)} $concluida={track.done}>
      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.5686 0.956629C30.1694 0.350274 30.9857 0.00637472 31.8392 8.77323e-05C32.6928 -0.00619925 33.5141 0.325638 34.1237 0.923077C34.7333 1.52052 35.0816 2.33498 35.0926 3.18846C35.1035 4.04195 34.7761 4.86506 34.182 5.4779L16.9915 26.9682C16.6962 27.2862 16.3398 27.5413 15.9437 27.7185C15.5476 27.8957 15.1198 27.9912 14.6859 27.9994C14.252 28.0076 13.821 27.9283 13.4184 27.7662C13.0159 27.6041 12.6502 27.3625 12.3431 27.0559L0.945601 15.6628C0.339937 15.0569 -0.000205509 14.2351 9.31541e-08 13.3784C0.000205695 12.5216 0.340743 11.7001 0.946698 11.0944C1.55265 10.4887 2.37439 10.1486 3.23113 10.1488C4.08788 10.149 4.90945 10.4895 5.51511 11.0955L14.5292 20.1117L29.4831 1.05749C29.5103 1.02282 29.5396 0.989868 29.5708 0.958822L29.5686 0.956629Z" fill="white"/>
</svg>

      </Icon>
      </Track>
    )}
    </ContainerContent>
    
    
  </Container>
  </>
}

const Icon = styled.div`
background-color: ${props => props.$concluida === true ? '#8FC549' : '#EBEBEB'} ;
width: 69px;
height: 69px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;

`
const Track = styled.div`
background-color: #FFFFFF;
padding: 13px;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
color: #666666;
font-size: 12.98px;
div h1 {
  font-size: 19.98px;
  font-weight: 400;
  line-height: 24.97px;
  margin-bottom: 7px;
}

`
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
flex-direction: column;
max-width: 700px;
width: 100%;
`
const Header = styled.header`
color: #126BA5;
display: flex;
width: 100%;
font-size: 22.98px;
line-height: 22.47px;
font-weight: 400;
margin-top: 30px ;
margin-bottom: 20px;
`


