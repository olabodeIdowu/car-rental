import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function PageB({ route: { params } }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={{ position: "relative" }}>
          <View style={styles.iconBackground}>
            <View style={styles.ibackground}>
              <FontAwesome6
                name="dollar-sign"
                color="#ffffff"
                size={16}
                solid
              />
            </View>
            <View style={styles.flexHour}>
              <Text style={{ color: "#007FFF", fontSize: 16, fontWeight: 800 }}>
                $30
              </Text>
              <Text style={{ color: "#222", fontSize: 16, fontWeight: 800 }}>
                /hr
              </Text>
            </View>
          </View>
          <View style={styles.iconBackground2}>
            <View style={styles.ibackground}>
              <MaterialCommunityIcons
                name="seatbelt"
                color="#ffffff"
                size={16}
                solid
              />
            </View>
            <View style={styles.flexHour}>
              <Text style={{ color: "#007FFF", fontSize: 16, fontWeight: 800 }}>
                07
              </Text>
              <Text style={{ color: "#222", fontSize: 16, fontWeight: 800 }}>
                Seats
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../../../assets/cars/rav4_lrg.jpg")}
          style={styles.image}
        />

        <View style={styles.secondaryStyle}>
          <Text style={styles.title}>
            Your Ultimate{" "}
            <Text style={{ fontSize: 32, fontWeight: 600, color: "#007FFF" }}>
              Car Rental
            </Text>{" "}
            Experience
          </Text>
          <Text style={styles.subtitle}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </Text>
          <Pressable
            onPress={() => navigation.navigate("page-c")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Let's get started</Text>
          </Pressable>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.footer}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("login-screen")}
              activeOpacity={0.4}
            >
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "#007FFF",
                  fontSize: 16,
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  image: {
    marginTop: 50,
    width: 400,
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
  iconBackground: {
    position: "absolute",
    right: 60,
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    backgroundColor: "#d8d8d8",
    borderRadius: 25,
    borderRightWidth: 5,
    borderRightColor: "#007FFF",
    padding: 7,
  },
  iconBackground2: {
    top: 40,
    marginLeft: 50,
    width: 120,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    backgroundColor: "#d8d8d8",
    borderRadius: 25,
    borderLeftWidth: 5,
    borderLeftColor: "#007FFF",
    padding: 7,
  },
  ibackground: {
    backgroundColor: "#007FFF",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderRadius: "50%",
  },
  secondaryStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 32,
    color: "#000000",
    padding: 15,
    fontWeight: 600,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    padding: 16,
  },
  footer: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    padding: 16,
  },
  flexHour: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
});
