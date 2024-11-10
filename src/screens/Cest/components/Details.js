import React from "react";
import CustomText from "../../../components/CustomText";
import { Image, StyleSheet, View } from "react-native";
import logo from "../../../../assets/logo.png";

export default function Details() {
  return (
    <>
      <CustomText style={styles.name}>Cesta de Verduras</CustomText>
      <View style={styles.farm}>
        <Image style={styles.imageFarm} source={logo} />
        <CustomText style={styles.nameFarm}>Jenny Jack Farm</CustomText>
      </View>
      <CustomText style={styles.description}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para a sua cozinha.
      </CustomText>
      <CustomText style={styles.price}>R$40,00</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imageFarm: {
    width: 32,
    height: 32,
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
