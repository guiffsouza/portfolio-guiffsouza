import { BackgroundMain, BoxImg, BoxMain, BoxTexto, Galeria, Linha, Margin } from "./style";
import { ImgGalaria1, ImgGalaria2, ImgGalaria3, ImgGalaria4 } from "../../../services/imagens";


export default function Main(){
  return (
    <BackgroundMain>
      <Margin>
        <Linha>
        <BoxMain>
        <BoxTexto>
            <h1>
              Oi, Me chamo Guilherme.
              <br></br>Bem vindo ao meu
              <br></br><span>Portifolio.</span>
            </h1>
          </BoxTexto>
          <BoxTexto>
            <p>Meu primeiro contato com a programação foi com o vba do excel, criei uma paixão a partir deste momento, então comecei a estudar html, css e javascript.<br></br> Obs: As imagens são meramente ilustrativas.</p>
          </BoxTexto>
        </BoxMain>
        </Linha>
        <Linha>
        <Galeria>
          <BoxImg image={ImgGalaria1} row="1" column="1"/>
          <BoxImg image={ImgGalaria2} row="1" column="2"/>
          <BoxImg image={ImgGalaria3} row="1" column="3"/>
          <BoxImg image={ImgGalaria4} row="1" column="4"/>
        </Galeria>
        </Linha>
      </Margin>
    </BackgroundMain>
  )
}