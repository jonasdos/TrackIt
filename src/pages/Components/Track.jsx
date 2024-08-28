import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dias } from "../scripts/diasSemana";
import styled from "styled-components";


export default function Tracks({userData, carregatracks}) {
const [tracks, setTracks] = useState([])




const config = {
  headers: {
    Authorization: `Bearer ${userData}`
  }
}
useEffect(() => {
  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
  .then(res => {
    setTracks(res.data)
    carregatracks(res.data.length > 0)
    
   })
  .catch(err => console.log(err))
},[carregatracks])




return <>
<ContainerContent>{tracks.map((track, index) => 
  <Container key={index}>
<div>{track.name}</div>
<Dias>
  {dias.map((dia, index) => 
  <DiaMarcado key={index} $marca={track.days.includes(index)}>{dia}</DiaMarcado>)
}
</Dias>
</Container>

)}

</ContainerContent>
</>

}

const ContainerContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow: auto;
overflow-x: hidden;
margin-bottom: 60px;
`
const Container = styled.div`

background-color: #FFFFFF;
width: 100%;
border-radius: 5px;
max-width: 750px;
display: flex;
flex-direction: column;
padding: 18px;
margin: 10px;
color: #666666;
font-weight:400 ;
font-size: 19.98px;
line-height: 24.97px;
`
const Dias = styled.div`
display: flex;
margin-top: 10px;
`
const DiaMarcado = styled.div`
border: 1px solid #D4D4D4 ;
border-radius: 5px;
font-size: 19.98px;
line-height: 24.97px;
font-weight: 400;
padding: 2px 8px;
color: ${props => (props.$marca === true ?'#faf9f9':'#CFCFCF')} ;
margin-right: 4px;
background-color: ${props => (props.$marca === true ? '#CFCFCF' : '' )};
`