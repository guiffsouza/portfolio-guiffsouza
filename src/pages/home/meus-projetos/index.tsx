import Background from "../../../components/Background";
import { Projeto } from "../../../services/imagens";
import { Content, Titulo } from "../../style";
import { BoxIcon, BoxTexto, Container, GitHubIcon, Grid, Image } from "./style";

export default function MeusProjetos(){
  return (
    <Background>
      <Container>
        <Grid>
          <Content column="1 / 4" row="1 / 1">
            <Titulo>Meus <span>Projetos</span></Titulo>
          </Content>
          <Content column="1 / 3" row="4 / 4">
            <Image image={Projeto}/>
          </Content>
          <Content column="3 / 3" row="4 / 4">
            <BoxTexto>
              <BoxIcon>
                <a href="#">
                  <GitHubIcon />
                </a>
              </BoxIcon>
              <p><span>Nome: </span>Max Bot</p>
              <p><span>Linguagem: </span>Python</p>
              <p><span>Descrição: </span>Bot apelidado de Max para realizar tarefas automaticas da heroup entre elas responder mensagens e fazer scrapy de dados. Foi desenvolvido com linguagem Python. Como todo progama o BotMax ainda não se encontra finalizado, pois estamos sempre em constante evolução.</p>
            </BoxTexto>
          </Content>
        </Grid>
      </Container>
    </Background>
  )
}