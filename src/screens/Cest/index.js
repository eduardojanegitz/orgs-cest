import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import Top from "./components/Top";
import Details from "./components/Details";

const Cest = () => {
  return (
    <>
      <SafeAreaView>
        <Top />
        <View style={styles.cest}>
          <Details />
        </View>
      </SafeAreaView>
    </>
  );
};

// Função utilizada para criar estilos
const styles = StyleSheet.create({
  cest: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  
});

export default Cest;
