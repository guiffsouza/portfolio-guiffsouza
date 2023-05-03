import { ReactNode } from "react";
import { BackgroundStyle, Margin } from "./style";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({children}: BackgroundProps){
  return(
    <BackgroundStyle>
      <Margin>
        {children}
      </Margin>
    </BackgroundStyle>
  )
}