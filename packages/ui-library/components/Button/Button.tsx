import React, { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  test: string;
}

export default ({ children }: ButtonProps) => <button>I SHOULD BE HERE</button>;
