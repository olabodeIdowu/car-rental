import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function PageA({ route: { params } }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.iconBackground}>
          <MaterialCommunityIcons name="car" color="#007FFF" size={26} />
        </View>
        <Text style={styles.subtitle}>Car Rental</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("page-b")}
          style={{ marginTop: 50 }}
          activeOpacity={0.4}
        >
          <MaterialCommunityIcons
            name="arrow-right-thin"
            color="#ffffff"
            size={52}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007FFF",
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  iconBackground: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  subtitle: {
    fontSize: 36,
    color: "#c8c6c4",
  },
});
