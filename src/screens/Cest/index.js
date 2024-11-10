import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import Top from "./components/Top";
import Details from "./components/Details";
import Item from "./components/Item";
import CustomText from "../../components/CustomText";

const Cest = ({ top, details, items }) => {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <SafeAreaView>
                <Top {...top} />
                <View style={styles.cest}>
                  <Details {...details} />
                  <CustomText style={styles.title}>{items.title}</CustomText>
                </View>
              </SafeAreaView>
            </>
          );
        }}
      />
    </>
  );
};

// Função utilizada para criar estilos
const styles = StyleSheet.create({
  cest: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 36,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});

export default Cest;
