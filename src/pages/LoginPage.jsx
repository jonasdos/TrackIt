import { useState } from "react";
import Logo from "./Components/Logo";
import Input from "./Components/Input";
import Button from "./Components/Button";
import LinkLogin from "./Components/Link";
import ContainerLogin from "./Components/ContainerLogin";

export default function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [button, setButton] = useState('Entrar')
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
      required />
    <Button>{button}</Button>
    <LinkLogin caminho='/cadastro'>Não tem uma conta? Cadastre-se!</LinkLogin>
  </ContainerLogin>
  </>
}

