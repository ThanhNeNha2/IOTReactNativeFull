import { app } from "../../firebase";
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
} from "react-native";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert(
          "Alert Title",
          "Dang ky thanh coong " + email,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],
          { cancelable: false }
        );
        const user = userCredential.user;
        setEmail("");
        setPassword("");
      })
      .catch(function (error) {
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
            { translateY: 400 },
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
        Register
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8,

          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        Name
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name "
        keyboardType="email-address"
        placeholderTextColor="#222222"
      />
      {/* Email  */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8,
        }}
      >
        Email
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#222222"
      />

      {/* Phone  */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8,

          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        Phone number
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone number "
        keyboardType="email-address"
        placeholderTextColor="#222222"
      />

      {/* Password */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8,

          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        Password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password "
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#222222"
        secureTextEntry
      />

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.button} title="Register">
          {" "}
          Register
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          color: "black",
        }}
      >
        Already have an account ?
      </Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            fontSize: 16,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Login
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
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
});

export default Register;
