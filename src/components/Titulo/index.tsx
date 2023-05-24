import { ReactNode } from "react";
import { TituloStyle } from "./styled";

interface TituloProps {
  children: ReactNode;
}

export default function Titulo({ children }: TituloProps) {
  return <TituloStyle>{children}</TituloStyle>;
}
