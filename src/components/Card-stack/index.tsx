import { BackgroundCardStack, BoxImg, BoxTexto, Texto } from "./styled";

export interface CardStackProps {
  variant: "main" | "black";
  column: string;
  row: string;
  image: string;
  alt: string;
  linguagem: string;
  id: number;
}

export default function CardStack({
  variant,
  column,
  row,
  image,
  alt,
  linguagem,
}: CardStackProps) {
  return (
    <BackgroundCardStack variant={variant} column={column} row={row}>
      <BoxImg>
        <img src={image} alt={alt} />
      </BoxImg>
      <BoxTexto>
        <Texto>{linguagem}</Texto>
      </BoxTexto>
    </BackgroundCardStack>
  );
}
