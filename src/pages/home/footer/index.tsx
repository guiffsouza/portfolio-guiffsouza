import Background from "../../../components/Background";
import { Content, Titulo } from "../../style";
import { ArrowTop, BotaoHome, Container, Grid } from "./style";
import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  return (
    <Background color="footerBackground">
      <Grid>
        <Content column="1 / 4" row="1 / 1" borderBottom={false}>
          <Container>
            <Titulo>
              Guilherme.<span>Dev</span>
            </Titulo>
            <BotaoHome onClick={scroll.scrollToTop}>
              <ArrowTop />
            </BotaoHome>
          </Container>
        </Content>
      </Grid>
    </Background>
  );
}
