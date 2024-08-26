import styled from "styled-components"


export default function Input({id, type, value, placeholder, onChange, valido = true, msgAviso }) {

  return <>
  <InputContainer>
  <InputForm
  id={id}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  $valido={valido}
  
  />
  {msgAviso && <Aviso>{msgAviso}</Aviso>}
  </InputContainer>
  </>
}
const InputContainer = styled.div`
position: relative;
`
const InputForm = styled.input`
&::placeholder {
  font-size: 19.98px;
  line-height: 24.97px;
  font-weight: 400;
  color: #DBDBDB;
  
}
&:focus{
  border: solid 1px #E4CA95;
  outline: none;
}

  outline: none;
  font-size: 19.98px;
  line-height: 24.97px;
  font-weight: 400;
  color: #666666;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({$valido}) => ($valido ? '#D4D4D4' : 'red')} ;
  display: block;

  width: 100%;
  max-width: 450px;
  min-width: 300px;
  position: relative;

`
const Aviso = styled.p`
color: red;
display: flex;
background-color: #FFFF;
font-family: Lexend Deca;
font-size: 12px;
text-align: right;
position: absolute;
top: -6px;
right: 0;
`