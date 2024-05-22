import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UpdatePasswordScreen({ route: { params } }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.backText}>&larr;</Text>
        </TouchableOpacity>

        <Text style={styles.skipText}>Update Password</Text>
      </View>
      <View>
        <Text style={styles.welcomeText}>
          Your new Password must be different from prevous used Passwords
        </Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="current Password"
            onChangeText={(text) => setCurrentPassword(text)}
            value={currentPassword}
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="password"
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            placeholder="confirm Password"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          // onPress={handleUpdatePassword}
          activeOpacity={0.4}
        >
          {isLoading ? (
            <View style={styles.horizontal}>
              <ActivityIndicator />
            </View>
          ) : (
            <Text style={styles.buttonText}>Done</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  welcomeImage: {
    marginBottom: 50,
    width: 300,
    height: 300,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },

  nav: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "left",
    gap: 80,
    flexDirection: "row",
    padding: 3.2,
    marginTop: 30,
    marginBottom: 40,
    padding: 20,
  },

  backText: {
    fontSize: 36,
    color: "#ffffff",
  },

  skipText: {
    fontSize: 16,
    margin: 10,
    textAlign: "right",
    color: "#ffffff",
  },
  updateText: {
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 22,
    color: "#ffffff",
  },
  welcomeText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 16,
    color: "#ffffff",
    padding: 15,
  },
  input: {
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#D9D9D9",
    borderRadius: 6,
    fontSize: 16,
    padding: 12,
  },
  button: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "#007FFF",
    padding: 15,
    color: "#ffffff",
    borderRadius: 40,
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
});
