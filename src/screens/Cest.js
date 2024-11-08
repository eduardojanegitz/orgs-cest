import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import top from "../../assets/topo.png";

// Função utilizada para pegar o tamanho da tela
const width = Dimensions.get("screen").width;

const Cest = () => {
  return (
    <>
      <SafeAreaView>
        <Image source={top} style={styles.top} />
        <Text style={styles.title}>Detalhes da Cesta</Text>
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
    padding: 16
  },
});

export default Cest;
