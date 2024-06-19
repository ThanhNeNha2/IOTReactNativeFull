import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function Example() {
  const [code, setCode] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4EFF3" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.headerAction}
          >
            <FeatherIcon color="#FD6B69" name="arrow-left" size={24} />
          </TouchableOpacity>

          <Text style={styles.title}>Enter Password</Text>

          <Text style={styles.subtitle}>
            We emailed a code to{" "}
            <Text style={{ color: "#222" }}>john@example.com</Text>, please
            enter the code to continue.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.formInput}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={true}
              caretHidden={true}
              keyboardType="number-pad"
              onChangeText={(value) => setCode(value.slice(0, 6))}
              returnKeyType="done"
              style={styles.formInputControl}
              value={code}
            />

            <View style={styles.formInputOverflow}>
              {Array.from({ length: 6 }).map((_, index) => {
                return (
                  <Text key={index} style={styles.formInputChar}>
                    {code[index] || (
                      <Text style={styles.formInputCharEmpty}>-</Text>
                    )}
                  </Text>
                );
              })}
            </View>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <Text style={styles.formFooter}>
            Didn't get the email?{" "}
            <Text style={styles.formLink}>Resend code</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#181818",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "500",
    color: "#889797",
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 28,
  },
  headerAction: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffdada",
    marginBottom: 16,
  },
  /** Form */
  form: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingHorizontal: 24,
  },
  formInput: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  formInputControl: {
    height: 60,
    color: "transparent",
    paddingHorizontal: 16,
    zIndex: 2,
  },
  formInputOverflow: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
  formInputChar: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    lineHeight: 60,
    fontSize: 34,
    textAlign: "center",
    fontWeight: "600",
  },
  formInputCharEmpty: {
    color: "#BBB9BC",
    fontWeight: "400",
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    marginTop: "auto",
    marginBottom: 24,
    paddingHorizontal: 24,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
    color: "#9fa5af",
    textAlign: "center",
  },
  formLink: {
    textAlign: "right",
    fontWeight: "600",
    color: "#FD6B68",
    textDecorationLine: "underline",
    textDecorationColor: "#FD6B68",
    textDecorationStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: "#FD6B68",
    borderColor: "#FD6B68",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
