import React, { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
}

export default ({ children }: ButtonProps) => <button>{children}</button>;
