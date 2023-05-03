import { CardStackProps } from "../components/Card-stack"
import { 
  LogoTypescript,
  LogoJavascript,
  LogoReact,
  LogoPython,
  LogoNode,
  LogoGithub,
  LogoDocker,
  LogoDjango,
  LogoNext } from "../services/imagens"

export const CardDatas: CardStackProps[] = [
  {
    id: 1,
    variant: 'black', 
    column: '1', 
    row: '2',
    image: LogoTypescript,
    alt: 'Imagem da Logo typescript.',
    linguagem: 'Typescript',
    experiencia: '2 anos de XP.'
  },
  {
    id: 2,
    variant: 'red', 
    column: '2', 
    row: '2',
    image: LogoJavascript,
    alt: 'Imagem da Logo javascript.',
    linguagem: 'Javascript',
    experiencia: '2 anos de XP.'
  },
  {
    id: 3,
    variant: 'black', 
    column: '3', 
    row: '2',
    image: LogoReact,
    alt: 'Imagem da Logo react.',
    linguagem: 'React',
    experiencia: '2 anos de XP.'
  },
  {
    id: 4,
    variant: 'black', 
    column: '1', 
    row: '3',
    image: LogoPython,
    alt: 'Imagem da Logo python.',
    linguagem: 'Python',
    experiencia: '2 anos de XP.'
  },
  {
    id: 5,
    variant: 'black', 
    column: '2', 
    row: '3',
    image: LogoNode,
    alt: 'Imagem da Logo nodejs.',
    linguagem: 'Nodejs',
    experiencia: '2 anos de XP.'
  },
  {
    id: 6,
    variant: 'black', 
    column: '3', 
    row: '3',
    image: LogoGithub,
    alt: 'Imagem da Logo github.',
    linguagem: 'GitHub',
    experiencia: '2 anos de XP.'
  },
  {
    id: 7,
    variant: 'black', 
    column: '1', 
    row: '4',
    image: LogoDocker,
    alt: 'Imagem da Logo docker.',
    linguagem: 'Docker',
    experiencia: '2 anos de XP.'
  },
  {
    id: 8,
    variant: 'black', 
    column: '2', 
    row: '4',
    image: LogoDjango,
    alt: 'Imagem da Logo Djando.',
    linguagem: 'Django',
    experiencia: '2 anos de XP.'
  },
  {
    id: 9,
    variant: 'black', 
    column: '3', 
    row: '4',
    image: LogoNext,
    alt: 'Imagem da Logo Nextjs.',
    linguagem: 'NextJs',
    experiencia: '2 anos de XP.'
  },
]