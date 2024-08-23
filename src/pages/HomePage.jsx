import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
const location = useLocation()
const userData = location.state?.userData
  return <>
  <h1>Tela Meus hábitos</h1>
  {userData && (
        <div>
          <p>Bem-vindo, {userData.name}</p>
          <img src={userData.image}/>
          <p>Seu ID: {userData.id}</p>
          <p>seu Token: {userData.token}</p>
          {/* Exiba mais dados aqui conforme necessário */}
        </div>
      )}
  </>
}