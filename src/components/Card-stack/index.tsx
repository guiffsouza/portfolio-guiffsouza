import { BackgroundCardStack, BoxImg, BoxTexto, Texto } from "./styled"

export interface CardStackProps {
  variant: 'red' | 'black';
  column: string;
  row: string;
  image: string;
  alt: string;
  linguagem: string;
  experiencia: string;
  id: number;
}

export default function CardStack({variant, column, row, image, alt, linguagem, experiencia}: CardStackProps){
  return (
    <BackgroundCardStack variant={variant} column={column} row={row}>
      <BoxImg>
        <img src={image} alt={alt}/>
      </BoxImg>
      <BoxTexto>
        <Texto>{linguagem}</Texto>
        <Texto>{experiencia}</Texto> 
      </BoxTexto>
    </BackgroundCardStack>
  )
}