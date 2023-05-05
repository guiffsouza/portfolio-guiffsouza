import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./style";

interface SideBarProps {
  isOpen: boolean;
  toggleButton: () => void;
}

export default function SideBar({ isOpen, toggleButton }: SideBarProps){
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggleButton}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="sobre" onClick={toggleButton}>
            Sobre
          </SideBarLink>
          <SideBarLink to="objetivo" onClick={toggleButton}>
            Objetivo
          </SideBarLink>
          <SideBarLink to="services" onClick={toggleButton}>
            Serviços
          </SideBarLink>
          <SideBarLink to="time" onClick={toggleButton}>
            Nosso Time
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute
            href="https://api.whatsapp.com/send?phone=5521964726029"
            target="_blank"
          >
            Contato
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};