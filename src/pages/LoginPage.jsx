import { useEffect, useState } from "react";
import Logo from "./Components/Logo";
import Input from "./Components/Input";
import Button from "./Components/Button";
import LinkLogin from "./Components/Link";
import ContainerLogin from "./Components/ContainerLogin";
import { verificaEmail, verificaSenha } from "./scripts/inputsCadastro";
import { PulseLoader } from "react-spinners";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState('')
  const [alertEmail, setAlertEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [button, setButton] = useState('Entrar')
  const navigate = useNavigate()

  function verificaDadosLocalmente(email, senha) {
   verificaEmail(email) || verificaSenha(senha) ? enviaLogin(): setAlertEmail('Email ou senha não está correto...')
   
   function enviaLogin() {
    setButton(<PulseLoader color="white"/>)
    const userDados = { email: email, password: senha}
    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', userDados)
    .then(res => {
      navigate('/habitos', {state: {userData: res.data}}
    )})
    .catch(err => console.log(err))
   }
  }
  return <>
  <ContainerLogin>
    <Logo/>

    <Input 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type='text'
      placeholder='email' 
      
      required />
    <Input 
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
      type='text'
      placeholder='senha' 
      msgAviso={alertEmail}
      required />
    <Button onClick={() =>verificaDadosLocalmente(email, senha)}>{button}</Button>
    <LinkLogin caminho='/cadastro'>Não tem uma conta? Cadastre-se!</LinkLogin>
  </ContainerLogin>
  </>
}

