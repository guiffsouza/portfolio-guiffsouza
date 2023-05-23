import Background from "../../../components/Background";
import CardStack from "../../../components/Card-stack";
import { BoxTitulo, Grid } from "./style";
import { CardDatas } from "../../../data/cards-data";
import { Titulo } from "../../style";

export default function MinhaStack() {
  return (
    <Background>
      <Grid>
        <BoxTitulo>
          <Titulo>
            Minha <span>Stack</span>
          </Titulo>
        </BoxTitulo>
        {CardDatas.map((card) => {
          return (
            <CardStack
              variant={card.variant}
              column={card.column}
              row={card.row}
              image={card.image}
              alt={card.alt}
              linguagem={card.linguagem}
              id={card.id}
              key={card.id}
            />
          );
        })}
      </Grid>
    </Background>
  );
}
