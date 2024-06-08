import { useContext, useState } from "react";
import axios from "axios";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RegisterScreen({ navigation, route: { params } }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const form = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  async function signup() {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "post",
        url: `${process.env.DEV_API_URL}/users/signup-user-with-email`,
        data: form,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response) throw new Error("response not found");
      setIsLoading(false);
      // console.log(response?.data?.data?.user);
      const user = response?.data?.data?.user;
      navigation.navigate("verify-OTP-screen", { user: user });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.primaryText}>Create Account</Text>
        <Text style={styles.secondaryText}>
          Fill your information or register with your social account.
        </Text>

        <View>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            name="name"
            style={styles.input}
            placeholder="Ex. Olabode"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
        </View>
        <View>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            name="name"
            style={styles.input}
            placeholder="Ex. Idowu"
            onChangeText={(text) => setLastName(text)}
            value={lastName}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            name="email"
            style={styles.input}
            placeholder="example@gmail.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            name="password"
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="******************"
          />
        </View>
        <View>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            name="confirmPassword"
            style={styles.input}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            placeholder="******************"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 20,
          }}
        >
          {isChecked ? (
            <MaterialCommunityIcons
              onPress={() => setIsChecked(!isChecked)}
              name="checkbox-marked"
              color="#007FFF"
              size={26}
            />
          ) : (
            <MaterialCommunityIcons
              onPress={() => setIsChecked(!isChecked)}
              name="checkbox-blank-outline"
              color="#444"
              size={26}
            />
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate("terms-condition-screen")}
            activeOpacity={0.4}
          >
            <Text
              style={{
                color: "#444",
                fontSize: 16,
              }}
            >
              Agree with{" "}
              <Text
                style={{
                  color: "#007FFF",
                  fontSize: 18,
                  textDecorationLine: "underline",
                }}
              >
                Terms & Conditions
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        <Pressable style={styles.button} onPress={signup} activeOpacity={0.4}>
          {isLoading ? (
            <View style={styles.horizontal}>
              <ActivityIndicator />
            </View>
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </Pressable>

        <Text style={{ textAlign: "center", marginBottom: 15 }}>
          Or sgn in with
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <TouchableOpacity
            // onPress={() => navigation.navigate("register-screen")}
            style={styles.ibackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons name="apple" color="#000000" size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate("register-screen")}
            style={styles.ibackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons name="google" color="red" size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate("register-screen")}
            style={styles.ibackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons name="facebook" color="blue" size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          marginTop: 25,
          textAlign: "center",
          color: "#222",
        }}
      >
        Don't have an account?
        <Text
          style={{ color: "#007FFF", marginLeft: 5 }}
          onPress={() => {
            navigation.navigate("login-screen");
          }}
        >
          sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 10,
  },
  primaryText: {
    textAlign: "center",
    fontSize: 24,
    color: "#222",
  },

  secondaryText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    padding: 20,
  },
  label: {
    color: "#222",
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 5,
  },

  input: {
    borderWidth: 0.2,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#007FFF",
    padding: 15,
    color: "#ffffff",
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#c8c6c4",
    fontSize: 20,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  ibackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#c8c6c4",
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
});
