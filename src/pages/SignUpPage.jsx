import { useEffect, useState } from "react";
import Logo from "./Components/Logo";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { PulseLoader } from "react-spinners";
import LinkLogin from "./Components/Link";
import ContainerLogin from "./Components/ContainerLogin";
import axios from "axios";
import {verificaEmail, verificaSenha, verificaNome, verificaFoto }from "./scripts/inputsCadastro";
import { Navigate } from "react-router-dom";

export default function SignUp() {
  const [redirect, setRedirect] = useState(false);

  const [email, setEmail] = useState('')
  const [emailbox, setEmailBox] = useState(true)
  const [alertEmail, setAlertEmail] = useState('')

  const [senha, setSenha] = useState('')
  const [senhaBox, setSenhaBox] = useState(true)
  const [alertSenha, setAlertSenha] = useState('')

  const [nome, setNome] = useState('')
  const [nomeBox, setNomeBox] = useState(true)
  const [alertNome, setAlertNome] = useState('')

  const [foto, setFoto] = useState('')
  const [fotoBox, setFotoBox] = useState(true)
  const [alertFoto, setAlertFoto] = useState('')

  const [button, setButton] = useState('Cadastrar')

  async function enviaDados(email, senha, nome, foto) {
    if(verificaEmail(email)) {
      setAlertEmail('')
      setEmailBox(true)   
    } else {
      setAlertEmail('Precisa incluir um e-mail válido')
      setEmailBox(false)      
    }
    if(verificaSenha(senha)) {
      setAlertSenha('')
      setSenhaBox(true)     
    } else {
      setAlertSenha('A senha precisa conter mais de 5 caracteres')
      setSenhaBox(false)      
    }
    if(verificaNome(nome)) {
      setAlertNome('')
      setNomeBox(true)      
    } else {
      setAlertNome('O nome precisa conter mais de 3 caracteres')
      setNomeBox(false)      
    }
    const validaFoto = await verificaFoto(foto)
    if(validaFoto) {
      setAlertFoto('')
      setFotoBox(true)      
    } else {
      setAlertFoto('O link da sua foto precisa estar válido')
      setFotoBox(false)    
    }
    if(verificaEmail(email) && verificaSenha(senha) && verificaNome(nome) && validaFoto) {
      setButton(<PulseLoader color="white"/>)
      const data = {
        email: email, 
        name: nome, 
        image: foto, 
        password: senha }
     
          
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', data)
            .then(res => { setButton('Cadastrado com sucesso... Você será redirecionado à página de login')
                           setTimeout(() => setRedirect(true), 3000)})
            .catch(error => {console.log(error.data)
                            setButton('Erro ao cadastrar')
            })
          
    
       
    }



    
   
    

  }
  return <>
  <ContainerLogin>
    {redirect && <Navigate to='/'/>}
    <Logo/>

    <Input 
      value={email}
      onChange={(e) =>  setEmail(e.target.value)}
      valido={emailbox}         
      type='text'
      placeholder='email' 
      msgAviso={alertEmail}
      required />

    <Input 
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
      valido={senhaBox}    
      type='text'
      placeholder='senha' 
      msgAviso={alertSenha}
      required />
       <Input 
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      valido={nomeBox}
      type='text'
      placeholder='nome' 
      msgAviso={alertNome}
      required />
      <Input 
      value={foto}
      onChange={(e) => setFoto(e.target.value)}
      valido={fotoBox}
      type='text'
      placeholder='foto' 
      msgAviso={alertFoto}
      required />
    <Button onClick={(e) =>enviaDados(email, senha, nome, foto)}>{button}</Button>
    <LinkLogin caminho='/'>Já tem uma conta? Faça login!</LinkLogin>
  </ContainerLogin>
  </>
}
