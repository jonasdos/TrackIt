import { useState } from "react";
import Logo from "./Components/Logo";
import Input from "./Components/Input";
import Button from "./Components/Button";
import LinkLogin from "./Components/Link";
import ContainerLogin from "./Components/ContainerLogin";

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [foto, setFoto] = useState('')

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
       <Input 
      value={nome}
      onChange={(e) => setSenha(e.target.value)}
      type='text'
      placeholder='nome' 
      required />
      <Input 
      value={foto}
      onChange={(e) => setSenha(e.target.value)}
      type='text'
      placeholder='foto' 
      required />
    <Button>Cadastrar</Button>
    <LinkLogin caminho='/'>Já tem uma conta? Faça login!</LinkLogin>
  </ContainerLogin>
  </>
}
