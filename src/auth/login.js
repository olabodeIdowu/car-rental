import { useContext, useState } from "react";
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

export default function LpginScreen({ navigation, route: { params } }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.primaryText}>Sign In</Text>
        <Text style={styles.secondaryText}>
          Hi! Welcome back, you've been missed
        </Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("forgot-password-screen")}
          activeOpacity={0.4}
        >
          <Text
            style={{
              color: "#007FFF",
              textAlign: "right",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        <Pressable
          style={styles.button}
          // onPress={handleRegister}
          activeOpacity={0.4}
        >
          {isLoading ? (
            <View style={styles.horizontal}>
              <ActivityIndicator />
            </View>
          ) : (
            <Text style={styles.buttonText}>Login</Text>
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
            navigation.navigate("register-screen");
          }}
        >
          Register
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
