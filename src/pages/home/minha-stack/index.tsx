import Background from "../../../components/Background";
import CardStack from "../../../components/Card-stack";
import { Grid } from "./style";
import { CardDatas } from "../../../data/cards-data";
import ReactScrollProps from "../../../interfaces/ReactScrollProps";
import Titulo from "../../../components/Titulo";

export default function MinhaStack({ id }: ReactScrollProps) {
  return (
    <div id={id}>
      <Background>
        <Titulo>
          Minha <span>Stack</span>
        </Titulo>
        <Grid>
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
    </div>
  );
}
