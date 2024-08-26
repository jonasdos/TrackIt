import styled from 'styled-components'
import Input from './Input'
import { dias } from '../scripts/diasSemana'
import CancelTrack from './Link-track'
import Button from './Button-Track'
import { useEffect, useState } from 'react'
export default function TrackAdd({placeholder, value, onChange, onclickCancel, onclickSave, inputTrack, inputTrackMsg}) {

const [diasMarcados, setDiasMarcados] = useState(dias.map((dia, index) => ({dia, selecionado: false})))

function selecionaDia(i) {
  setDiasMarcados(prev =>
    prev.map((dia, index) => i === index ?
    {...dia, selecionado: !dia.selecionado} : dia
  ))
}

  return <>
  <Container>
    <Input 
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    valido={inputTrack}
    msgAviso={inputTrackMsg}
    />
    <Dias>
    {diasMarcados.map((dia, i) => 
    <Dia key={i} onClick={() => selecionaDia(i)} $marca={dia.selecionado}>
      <p>{dia.dia}</p>
    </Dia> 
    )}
    </Dias>
    <ContainerOptions>
    <CancelTrack onClick={onclickCancel}>Cancelar</CancelTrack>
    <Button onClick={() =>onclickSave(diasMarcados)}>Salvar</Button>
    </ContainerOptions>
  </Container>
  </>
}

const Container = styled.div`

background-color: #FFFFFF;
width: 100%;
border-radius: 5px;
max-width: 750px;
display: flex;
flex-direction: column;
padding: 18px;
`
const Dias = styled.div`
display: flex;
margin-top: 10px;

`
const Dia = styled.div`
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
const ContainerOptions = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-top: 20px;
`