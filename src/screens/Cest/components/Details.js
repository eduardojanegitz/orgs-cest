import React from "react";
import CustomText from "../../../components/CustomText";
import {
  Image,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Details({
  name,
  farmName,
  farmLogo,
  description,
  price,
  button,
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

      <TouchableOpacity style={styles.button}>
        <CustomText style={styles.buttonText}>{button}</CustomText>
      </TouchableOpacity>
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
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6
  }, 
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold"
  }
});
