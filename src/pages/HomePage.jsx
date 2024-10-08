import { useContext } from "react";
import UserContext from '../contexts/UserContext.jsx'
import Header from "./Components/Header";
import Main from "./Components/Main"
import Footer from "./Components/Footer";

export default function Home() {
  const { userData } = useContext(UserContext);

  return <>

  <Header avatar={userData.image}/>
  <Main userData={userData.token}/>
  <Footer userData={userData.token}/>

  </>
}