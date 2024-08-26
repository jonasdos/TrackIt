import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from "./Components/Footer";
export default function Home() {
const location = useLocation()
const userData = location.state?.userData

  return <>

  <Header avatar={userData.image}/>
  <Main userData={userData.token}/>
  <Footer/>

  </>
}