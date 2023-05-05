import { ReactNode } from "react";
import { BackgroundStyle, Margin } from "./style";

interface BackgroundProps {
  children: ReactNode;
  color?: "black" | "gray"
}

export default function Background({children, color = 'black'}: BackgroundProps){
  return(
    <BackgroundStyle>
      <Margin>
        {children}
      </Margin>
    </BackgroundStyle>
  )
}