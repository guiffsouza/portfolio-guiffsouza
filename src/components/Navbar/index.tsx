import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  BoxLogo,
} from "./style";

interface NavBarProps {
  toggleButton: () => void;
}

const NavBar = ({ toggleButton }: NavBarProps) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <BoxLogo>
                Guilherme.<span>Dev</span>
              </BoxLogo>
            </NavLogo>
            <MobileIcon onClick={toggleButton}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="meus_projetos"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Meus Projetos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="minha_stack"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Minha Stack
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                href="https://api.whatsapp.com/send?phone=5521964726029"
                target="_blank"
              >
                Contato
              </NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
