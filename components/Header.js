import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sizetext} onPress={props.goHome}>
          {" "}
          umum{" "}
        </Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/MunumberOne.jpg")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  sizetext: {
    fontSize: 24,
    fontWeight: 900,
  },
});
