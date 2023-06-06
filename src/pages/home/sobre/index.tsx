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
        rowMobile="1"
        column="1 / 1"
        borderBottom={true}
        borderRight={false}
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
        rowMobile="4"
        column="2 / 3"
        borderBottom={true}
        borderRight={true}
      >
        <BoxTexto>
          <Texto>
            O que você quer ser quando crescer ? Quando criança eu dizia que
            queria desenvolver games, bom, hoje não desenvolvo games, mas
            desenvolvo softwares e sou apaixonado por isso! Atualmente estou em
            busca de uma oportunidade para atuar como Front-end, Back-end e Full
            Stack.
          </Texto>
        </BoxTexto>
      </Content>
      <Content
        row="1 / 3"
        column="3 / 4"
        rowMobile="2"
        borderBottom={true}
        borderRight={true}
      >
        <BoxTexto>
          <Texto>
            Meu primeiro contato com a programação foi com o vba no excel, criei
            uma paixão a partir deste momento, então comecei a estudar html, css
            e javascript.
          </Texto>
        </BoxTexto>
      </Content>
      <Content
        row="3 / 4"
        rowMobile="3"
        column="2 / 4"
        borderBottom={true}
        borderRight={true}
      >
        <Img />
      </Content>
    </Grid>
  );
}
