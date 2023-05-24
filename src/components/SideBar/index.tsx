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

export default function SideBar({ isOpen, toggleButton }: SideBarProps) {
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggleButton}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="home" onClick={toggleButton}>
            Home
          </SideBarLink>
          <SideBarLink to="meus_projetos" onClick={toggleButton}>
            Meus Projetos
          </SideBarLink>
          <SideBarLink to="minha_stack" onClick={toggleButton}>
            Minhas Stack
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
}
