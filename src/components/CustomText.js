import React from "react";
import { StyleSheet, Text } from "react-native";

export default function CustomText({ children, style }) {
  let styleCustom = styles.text;

  if (style?.fontWeight === "bold") {
    styleCustom = styles.textBold;
  }

  return <Text style={[style, styleCustom]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
  },
  textBold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
