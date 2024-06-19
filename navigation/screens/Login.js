import React, { useState } from "react";
import Body from "../../components/Body";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        Alert.alert(
          "Alert Title",
          "Dang nhap thanh coong " + email,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => navigation.navigate("Feature") },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/anh4.avif")}
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
        source={require("../../assets/anh1.avif")}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          marginTop: 20,
          position: "absolute",
          top: 10,
          transform: [
            { translateX: 90 },
            { translateY: 500 },
            { rotate: "-15deg" },
          ],
        }}
      />
      <Text
        style={{
          fontSize: 58,
          fontWeight: 800,
          marginBottom: 50,
          color: "#007260",
        }}
      >
        Login
      </Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setemail}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholderTextColor="#999"
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.button} title="Login">
          {" "}
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          color: "white",
        }}
      >
        Create account new ?
      </Text>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCCCCC",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    borderWidth: 1,
    borderColor: "#007260",
    backgroundColor: "#007260",
    borderRadius: 10,
    color: "white",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imgene: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Login;
