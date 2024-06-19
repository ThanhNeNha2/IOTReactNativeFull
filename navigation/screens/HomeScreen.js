import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import COLORS from "./colors";
// import LinearGradient from "react-native-linear-gradient";
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }} backgroundColor={COLORS.primary}>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../../assets/anh1.avif")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              marginTop: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/anh2.jpg")}
            style={{
              height: 100,
              width: 100,
              marginTop: 20,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-5deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/anh3.avif")}
            style={{
              height: 100,
              width: 100,
              marginTop: 20,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "15deg" },
              ],
            }}
          />

          <Image
            source={require("../../assets/anh4.avif")}
            style={{
              height: 200,
              width: 200,
              marginTop: 20,
              borderRadius: 20,
              position: "absolute",
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            marginTop: 20,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Let's Get
          </Text>

          <Text
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Started
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              Connect with each other with chatting
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Calling, Enjoy Safe and private texting
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Join Now </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imgene: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.primary,
    backgroundColor: "white",
    fontSize: 16,
  },
});
