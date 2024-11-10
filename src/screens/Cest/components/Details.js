import React from "react";
import CustomText from "../../../components/CustomText";
import { Image, StyleSheet, View } from "react-native";

export default function Details({
  name,
  farmName,
  farmLogo,
  description,
  price,
}) {
  return (
    <>
      <CustomText style={styles.name}>{name}</CustomText>
      <View style={styles.farm}>
        <Image style={styles.imageFarm} source={farmLogo} />
        <CustomText style={styles.farmName}>{farmName}</CustomText>
      </View>
      <CustomText style={styles.description}>{description}</CustomText>
      <CustomText style={styles.price}>{price}</CustomText>
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
  farmName: {
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
