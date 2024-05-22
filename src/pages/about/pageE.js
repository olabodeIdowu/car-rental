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


export default function PageE({ route: { params } }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image
            source={require("../../../assets/cars/phone.jpg")}
            style={styles.image}
          />
        </View>

        <View style={styles.secondaryStyle}>
          <View>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: "#007FFF",
                textAlign: "center",
                padding: 30,
              }}
            >
              Track Your Rental:{" "}
              <Text style={styles.title}>Stay in Control of Your Journey</Text>
            </Text>
            <Text style={styles.subtitle}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 50,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("page-d")}
            style={styles.ibackground}
          >
            <MaterialCommunityIcons
              name="arrow-left-thin"
              color="#007FFF"
              size={26}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("page-c")}
              style={styles.dot}
            ></Pressable>
            <Pressable
              onPress={() => navigation.navigate("page-d")}
              style={styles.dot}
            ></Pressable>
            <Pressable style={styles.dotActive}></Pressable>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("register-screen")}
            style={[styles.activebackground, styles.ibackground]}
          >
            <MaterialCommunityIcons
              name="arrow-right-thin"
              color="#ffffff"
              size={26}
            />
          </TouchableOpacity>
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

  image: {
    marginTop: 10,
    width: 400,
    height: 400,
    marginLeft: "auto",
    marginRight: "auto",
  },
  ibackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#007FFF",
    width: 30,
    height: 30,
    borderRadius: "50%",
  },

  activebackground: {
    backgroundColor: "#007FFF",
  },
  dot: {
    backgroundColor: "#c8c6c4",
    width: 6,
    height: 6,
    borderRadius: "50%",
  },

  dotActive: {
    backgroundColor: "#007FFF",
    borderRadius: "50%",
    width: 10,
    height: 10,
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
    padding: 30,
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
