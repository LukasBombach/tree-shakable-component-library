import React, { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
}

export default ({ children }: ButtonProps) => <button>I SHOULD BE HERE</button>;
