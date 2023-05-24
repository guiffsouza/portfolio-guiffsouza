import { useState } from "react";
import Background from "../../../components/Background";
import { Content } from "../../style";
import { ProjetosData } from "./projetos-data";
import {
  ArrowLeft,
  ArrowRight,
  BoxArrow,
  BoxGrid,
  BoxIcon,
  BoxTexto,
  Container,
  GitHubIcon,
  Grid,
  Image,
} from "./style";
import ReactScrollProps from "../../../interfaces/ReactScrollProps";
import Titulo from "../../../components/Titulo";

export default function MeusProjetos({ id }: ReactScrollProps) {
  const [margin, setMargin] = useState<string>("0");
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const width = () => {
    let w = ProjetosData.length * 1280;
    return w.toString();
  };

  const arrowLeft = () => {
    let tamanhoConteudo = 1200 + 80;
    let marginNumber = parseInt(margin);
    let novoValor = marginNumber + tamanhoConteudo;
    let marginString = novoValor.toString();
    if (marginNumber < 0) {
      setMargin(marginString);
    }
  };

  const arrowRight = () => {
    let tamanhoConteudo = 1200 + 80;
    let marginNumber = parseInt(margin);
    let novoValor = marginNumber - tamanhoConteudo;
    let marginString = novoValor.toString();
    let totalWidth = parseInt(width()) - tamanhoConteudo;
    if (marginNumber > -totalWidth) {
      setMargin(marginString);
    }
  };

  return (
    <div id={id}>
      <Background>
        <Titulo>
          Meus <span>Projetos</span>
        </Titulo>
        <BoxArrow position="left" onClick={arrowLeft} hover={hover}>
          <ArrowLeft onClick={arrowLeft} />
        </BoxArrow>
        <BoxArrow position="right" onClick={arrowRight} hover={hover}>
          <ArrowRight onClick={arrowRight} />
        </BoxArrow>
        <Container>
          <BoxGrid margin={margin} width={width()}>
            {ProjetosData.map((projeto) => {
              return (
                <Grid
                  key={projeto.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Content column="1 / 3" rowMobile="1" row="4 / 4">
                    <Image image={projeto.imagem} />
                  </Content>
                  <Content column="3 / 3" rowMobile="2" row="4 / 4">
                    <BoxTexto>
                      <BoxIcon>
                        <a href={projeto.link} target="_blank" rel="noreferrer">
                          <GitHubIcon />
                        </a>
                      </BoxIcon>
                      <p>
                        <span>Nome: </span>
                        {projeto.nome}
                      </p>
                      <p>
                        <span>Linguagem: </span>
                        {projeto.linguagem}
                      </p>
                      <p>
                        <span>Descrição: </span>
                        {projeto.descricao}
                      </p>
                    </BoxTexto>
                  </Content>
                </Grid>
              );
            })}
          </BoxGrid>
        </Container>
      </Background>
    </div>
  );
}
