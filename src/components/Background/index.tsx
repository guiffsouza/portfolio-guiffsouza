import { ReactNode } from "react";
import { BackgroundStyle, Margin } from "./style";

interface BackgroundProps {
  children: ReactNode;
  color?: "bodyBackground" | "footerBackground" | "black";
}

export default function Background({
  children,
  color = "bodyBackground",
}: BackgroundProps) {
  return (
    <>
      <BackgroundStyle color={color}>
        <Margin>{children}</Margin>
      </BackgroundStyle>
    </>
  );
}
