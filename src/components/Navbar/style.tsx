import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

interface NavProps {
  scrollNav: boolean;
}

export const Nav = styled.nav<NavProps>`
  ${({ theme, scrollNav }) => {
    return {
      background: scrollNav ? theme.bodyBackground : "transparent",
      height: "80px",
      marginTop: "-80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem",
      position: "sticky",
      top: "0",
      zIndex: "10",
    };
  }}
  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
  @media screen and(max-width: 900px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkS)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const BoxLogo = styled.div`
  max-width: 90px;
  span {
    color: ${({ theme }) => theme.main};
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.main};
  }
  &.active {
    border-bottom: ${({ theme }) => `3px solid ${theme.main}`};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  background: ${({ theme }) => theme.main};
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 00;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.red};
  }
`;
