import { useState } from "react";
import Main from "./main";
import MinhaStack from "./minha-stack";
import NavBar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Sobre from "./sobre";
import MeusProjetos from "./meus-projetos";
import Footer from "./footer";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggleButton={toggleButton} />
      <NavBar toggleButton={toggleButton} />
      <Main />
      <Sobre />
      <MeusProjetos />
      <MinhaStack />
      <Footer />
    </>
  );
}
