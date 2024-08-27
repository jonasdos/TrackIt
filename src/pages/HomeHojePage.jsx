import { useContext } from "react";
import UserContext from "../contexts/UserContext.jsx";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainHoje from "./Components/MainHoje";


export default function HomeHoje() {
  const { userData } = useContext(UserContext);


  return <>

  <Header avatar={userData.image}/>
  <MainHoje userData={userData.token}/>
  <Footer userData={userData.token}/>

  </>
}