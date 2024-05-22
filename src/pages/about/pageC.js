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

export default function PageC({ route: { params } }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("register-screen")}
          activeOpacity={0.4}
        >
          <Text
            style={{
              fontSize: 18,
              padding: 10,
              fontWeight: 600,
              color: "#007FFF",
              textAlign: "right",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>

        <View>
          <Image
            source={require("../../../assets/cars/phone.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.secondaryStyle}>
          <View>
            <Text style={styles.title}>
              Getting Started with{" "}
              <Text style={{ fontSize: 32, fontWeight: 600, color: "#007FFF" }}>
                Easy Rentals
              </Text>
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
            marginTop: 20,
            gap: 45,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Pressable
              // onPress={() => navigation.navigate("page-c")}
              style={styles.dotActive}
            ></Pressable>
            <Pressable
              onPress={() => navigation.navigate("page-d")}
              style={styles.dot}
            ></Pressable>
            <Pressable
              onPress={() => navigation.navigate("page-e")}
              style={styles.dot}
            ></Pressable>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("page-d")}
            style={[styles.activebackground, styles.ibackground]}
            activeOpacity={0.4}
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
