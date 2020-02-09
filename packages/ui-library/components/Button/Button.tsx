import React, { ReactNode } from "react";
import Button from "../../primitives/Button";

export interface ButtonProps {
  children?: ReactNode;
}

export default ({ children }: ButtonProps) => <Button>{children}</Button>;
