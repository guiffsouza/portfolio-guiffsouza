import { Content } from "../../style";
import { BoxLinks, BoxTexto, Grid, IconGitHub, IconInstagram, IconLinkedin, Img, Link, Texto } from "./style";

export default function Sobre(){
  return (
    <Grid>
        <Content variant="borda" row="1 / 4" column="1 / 1" border={true}>
          <BoxLinks>
            <Link>
              <IconGitHub/>
            </Link>
            <Link>
              <IconLinkedin/>
            </Link>
            <Link>
              <IconInstagram/>
            </Link>
          </BoxLinks>
        </Content>
        <Content variant="borda" row="1 / 3" column="2 / 3" border={true}>
          <BoxTexto>
            <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
            </Texto>
          </BoxTexto>
        </Content>
        <Content variant="borda" row="1 / 3" column="3 / 4" border={true}>
          <BoxTexto>
            <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
            </Texto>
          </BoxTexto>
        </Content>
        <Content variant="borda" row="3 / 4" column="2 / 4" border={true}>
          <Img/>
        </Content>
      </Grid>
  )
}