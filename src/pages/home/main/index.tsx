import ReactScrollProps from "../../../interfaces/ReactScrollProps";
import { BackgroundMain, BoxMain, BoxTexto, Margin } from "./style";

export default function Main({ id }: ReactScrollProps) {
  return (
    <div id={id}>
      <BackgroundMain>
        <Margin>
          <BoxMain>
            <BoxTexto>
              <h1>
                Oi, Me chamo <span>Guilherme</span>
              </h1>
              <p>
                <span>Bem-vindo</span> ao meu Portfolio!
              </p>
            </BoxTexto>
          </BoxMain>
        </Margin>
      </BackgroundMain>
    </div>
  );
}
