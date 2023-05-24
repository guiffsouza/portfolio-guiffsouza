import styled from "styled-components";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Banner2 } from "../../../services/imagens";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 2fr;
  align-items: center;
  gap: 0;
  background-color: ${({ theme }) => theme.bodyBackground};
  height: 60vh;
  position: relative;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

export const BoxLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    flex-direction: row;
  }
`;

export const Link = styled.a`
  margin: 20px;
`;

export const IconGitHub = styled(BsGithub)`
  font-size: 3em;
  color: ${({ theme }) => theme.borda};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.main};
  }
`;

export const IconLinkedin = styled(BsLinkedin)`
  font-size: 3em;
  color: ${({ theme }) => theme.borda};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.main};
  }
`;

export const IconInstagram = styled(BsInstagram)`
  font-size: 3em;
  color: ${({ theme }) => theme.borda};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.main};
  }
`;

export const BoxTexto = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  max-width: 400px;

  @media screen and (max-width: 900px) {
    max-width: none;
    padding: 0;
    margin: 0 20px;
  }
`;

export const Texto = styled.p`
  color: ${({ theme }) => theme.white};
  line-height: 21px;
`;

export const Img = styled.div`
  background-image: url(${Banner2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
`;
