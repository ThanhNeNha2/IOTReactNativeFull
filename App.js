import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MainContainer from "./navigation/MainContainer";
import Body from "./components/Body";

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer />

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
