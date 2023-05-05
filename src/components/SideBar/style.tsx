import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

interface SideBarContainerProps {
  isOpen: boolean;
}

export const SideBarContainer = styled.aside<SideBarContainerProps>`
  ${({isOpen, theme}) => {
    return{
      background: theme.bodyBackground,
      opacity: isOpen ? '100%' : '0',
      top: isOpen ? '0' : '-100%',
      transition: '0.3 all ease-in-out',
      position: 'fixed',
      zIndex: '999',
      width: '100%',
      height: '100%',
      display: 'grid',
      alignItems: 'center',
      left: '0',
    }
  }}
`;

export const CloseIcon = styled(FaTimes)`
  color: ${({theme}) => theme.white};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: ${({theme}) => theme.white};
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  color: ${({theme}) => theme.white};
  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.red};
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRoute = styled.a`
  ${({theme}) => {
    return {
      background: theme.red,
      whiteSpace: "nowrap",
      padding: "16px 64px",
      color: theme.white,
      fontWeight: "500",
      fontSize: "16px",
      outline: "none",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      textDecoration: "none",
      ':hover' : {
        transition: "all 0.2s ease-in-out",
        color: theme.black,
      }
    }
  }}
`;