import Background from "../../components/Background";
import CardStack from "../../components/Card-stack";
import { BoxHomePage, BoxTitulo, Grid, Titulo } from "./style";
import { CardDatas } from "../../data/cards-data";

export default function HomePage(){
  return(
    <Background>
      <BoxHomePage>
        <Grid>
          <BoxTitulo>
            <Titulo>Minha</Titulo>
            <Titulo>Stack</Titulo>
          </BoxTitulo>
          {CardDatas.map((card) => {
            return(
              <CardStack 
              variant={card.variant} 
              column={card.column} 
              row={card.row}
              image={card.image}
              alt={card.alt}
              experiencia={card.experiencia}
              linguagem={card.linguagem}
              id={card.id}
              key={card.id}
            />
            )
          })}
        </Grid>
      </BoxHomePage>
    </Background>
  )
}