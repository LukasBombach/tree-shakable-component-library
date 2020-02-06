import React, { ReactNode } from "react";

export interface LinkProps {
  children?: ReactNode;
  href?: string;
}

export default ({ children, href }: LinkProps) => (
  <a href={href}>I MUST NOT BE HERE</a>
);
