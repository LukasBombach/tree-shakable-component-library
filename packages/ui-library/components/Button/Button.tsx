import React, { ReactNode } from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  children?: ReactNode;
}

export default ({ children }: ButtonProps) => (
  <button className={styles.button}>I SHOULD BE HERE</button>
);
