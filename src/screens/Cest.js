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

// Função utilizada para pegar o tamanho da tela
const width = Dimensions.get("screen").width;

const Cest = () => {
  return (
    <>
      <SafeAreaView>
        <Image source={top} style={styles.top} />
        <Text style={styles.title}>Detalhes da Cesta</Text>

        <View style={styles.cest}>
          <Text style={styles.name}>Cesta de Verduras</Text>
          <View style={styles.farm}>
            <Image style={styles.imageFarm} source={logo} />
            <Text style={styles.nameFarm}>Jenny Jack Farm</Text>
          </View>
          <Text style={styles.description}>
            Uma cesta com produtos selecionados cuidadosamente da fazenda direto
            para a sua cozinha.
          </Text>
          <Text style={styles.price}>R$40,00</Text>
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
