import { Content } from "../../style";
import {
  BoxLinks,
  BoxTexto,
  Grid,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  Img,
  Link,
  Texto,
} from "./style";

export default function Sobre() {
  return (
    <Grid>
      <Content
        row="1 / 4"
        column="1 / 1"
        borderBottom={true}
        borderRight={true}
      >
        <BoxLinks>
          <Link href="https://github.com/guiffsouza" target="_blank">
            <IconGitHub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/guilherme-freitas-181335189/"
            target="_blank"
          >
            <IconLinkedin />
          </Link>
          <Link href="https://www.instagram.com/guiffsouza/" target="_blank">
            <IconInstagram />
          </Link>
        </BoxLinks>
      </Content>
      <Content
        row="1 / 3"
        column="2 / 3"
        borderBottom={true}
        borderRight={true}
      >
        <BoxTexto>
          <Texto>
            Tenho 3 anos de experiência atuando no mercado de desenvolvimento e
            4 anos estudando tecnologia. Estou em busca de uma oportunidade para
            atuar como Front-end, Back-end e Full Stack.
          </Texto>
        </BoxTexto>
      </Content>
      <Content
        row="1 / 3"
        column="3 / 4"
        borderBottom={true}
        borderRight={true}
      >
        <BoxTexto>
          <Texto>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            malesuada amet pretium lacus. Id potenti diam et cras odio viverra.
            Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
          </Texto>
        </BoxTexto>
      </Content>
      <Content
        row="3 / 4"
        column="2 / 4"
        borderBottom={true}
        borderRight={true}
      >
        <Img />
      </Content>
    </Grid>
  );
}
