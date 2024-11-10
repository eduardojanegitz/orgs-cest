import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import top from "../../assets/topo.png";
import logo from "../../assets/logo.png";
import CustomText from "../components/CustomText";

// Função utilizada para pegar o tamanho da tela
const width = Dimensions.get("screen").width;

const Cest = () => {
  return (
    <>
      <SafeAreaView>
        <Image source={top} style={styles.top} />
        <CustomText style={styles.title}>Detalhes da Cesta</CustomText>

        <View style={styles.cest}>
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
        </View>
      </SafeAreaView>
    </>
  );
};

// Função utilizada para criar estilos
const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  cest: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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

export default Cest;
