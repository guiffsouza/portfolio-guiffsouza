import { CardStackProps } from "../components/Card-stack";
import {
  LogoTypescript,
  LogoJavascript,
  LogoReact,
  LogoPython,
  LogoNode,
  LogoGithub,
  LogoDocker,
  LogoDjango,
  LogoNext,
} from "../services/imagens";

export const CardDatas: CardStackProps[] = [
  {
    id: 1,
    variant: "black",
    column: "1",
    row: "1",
    image: LogoTypescript,
    alt: "Imagem da Logo typescript.",
    linguagem: "Typescript",
  },
  {
    id: 2,
    variant: "main",
    column: "2",
    row: "1",
    image: LogoJavascript,
    alt: "Imagem da Logo javascript.",
    linguagem: "Javascript",
  },
  {
    id: 3,
    variant: "black",
    column: "3",
    row: "1",
    image: LogoReact,
    alt: "Imagem da Logo react.",
    linguagem: "React",
  },
  {
    id: 4,
    variant: "black",
    column: "1",
    row: "2",
    image: LogoPython,
    alt: "Imagem da Logo python.",
    linguagem: "Python",
  },
  {
    id: 5,
    variant: "black",
    column: "2",
    row: "2",
    image: LogoNode,
    alt: "Imagem da Logo nodejs.",
    linguagem: "Nodejs",
  },
  {
    id: 6,
    variant: "black",
    column: "3",
    row: "2",
    image: LogoGithub,
    alt: "Imagem da Logo github.",
    linguagem: "GitHub",
  },
  {
    id: 7,
    variant: "black",
    column: "1",
    row: "3",
    image: LogoDocker,
    alt: "Imagem da Logo docker.",
    linguagem: "Docker",
  },
  {
    id: 8,
    variant: "black",
    column: "2",
    row: "3",
    image: LogoDjango,
    alt: "Imagem da Logo Djando.",
    linguagem: "Django",
  },
  {
    id: 9,
    variant: "black",
    column: "3",
    row: "3",
    image: LogoNext,
    alt: "Imagem da Logo Nextjs.",
    linguagem: "NextJs",
  },
];
