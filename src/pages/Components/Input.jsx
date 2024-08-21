import styled from "styled-components"


export default function Input({id, type, value, placeholder, onChange }) {

  return <>
  <InputForm
  id={id}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}/>
  
  </>
}

const InputForm = styled.input`
&::placeholder {
  font-size: 19.98px;
  line-height: 24.97px;
  font-weight: 400;
  color: #DBDBDB;
  
}
&:focus{
  border: solid 2px #E4CA95;
  outline: none;
}
font-size: 19.98px;
  line-height: 24.97px;
  font-weight: 400;
  color: #666666;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #D4D4D4;
  display: block;
  margin: 5px;
  width: 100%;
  max-width: 450px;
  min-width: 300px;

`