import React from "react";
import { Text, Touchable, StyleSheet } from "react-primitives";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f00",
  },
  text: {
    color: "#0f0",
  },
});

export default () => (
  <Touchable style={styles.button}>
    <Text style={styles.text}>I SHOULD BE HERE</Text>
  </Touchable>
);
