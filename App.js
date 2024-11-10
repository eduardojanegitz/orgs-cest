import { StatusBar, SafeAreaView, View } from "react-native";
import Cest from "./src/screens/Cest";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import mock from "./src/mocks/cest";

export default function App() {
  const [font] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!font) {
    return <View />;
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Cest {...mock}/>
    </SafeAreaView>
  );
}
