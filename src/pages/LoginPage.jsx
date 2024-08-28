import { useEffect, useState } from "react";
import { useContext } from "react";
import  UserContext from '../contexts/UserContext.jsx';
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
  const { setUserData } = useContext(UserContext);
  const { userData } = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [alertEmail, setAlertEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [button, setButton] = useState('Entrar')
  const navigate = useNavigate()
  const [trava, setTrava] = useState(false)
  const [verifica, setVerifica] = useState(0)


function verificaUser() {
  if(verifica === 0 && userData ) {
  verificaDadosLocalmente(userData.email, userData.password)
  
}
}
useEffect(() =>{verificaUser()},[]
)
  function verificaDadosLocalmente(email, senha) {
   verificaEmail(email) || verificaSenha(senha) ? enviaLogin(): setAlertEmail('Email ou senha não está correto...')
   
   function enviaLogin() {
    setButton(<PulseLoader color="white"/>)
    setTrava(true)
    const userDados = { email: email, password: senha}
    axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', userDados)
    .then(res => {
      localStorage.setItem('userData', JSON.stringify(res.data));
      setUserData(res.data);
      
      navigate('/habitos');
      setTrava(false)
    })
    .catch(err => {
      setTrava(false)
      setButton('Entrar')
      setAlertEmail('Email ou senha inválidos')
    })

   
   }
  }
  return <>
  <ContainerLogin>
    <Logo/>

    <Input 
      $trava={trava}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type='text'
      placeholder='email' 
      
      required />
    <Input 
    $trava={trava}
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

