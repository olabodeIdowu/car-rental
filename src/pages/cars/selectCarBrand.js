import { useContext, useState, useEffect } from "react";
import {
  Alert,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import brands from "../../../assets/dev_data/brands";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SelectCarBrandScreen({ route: { params } }) {
  const [isLoading, setIsLoading] = useState(false);
  const [carBrandArray, setCarBrandArray] = useState(brands);
  const navigation = useNavigation();

  function handleBrandSelection(p, i) {
    setCarBrandArray((brand) => {
      return brand.map((b, index) => {
        return {
          ...b,
          active: i === index ? !b.active : b.active,
        };
      });
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("dashboard-screen");
          }}
          style={styles.ibackground}
          activeOpacity={0.4}
        >
          <MaterialCommunityIcons
            name="arrow-left-thin"
            color="#222"
            size={26}
          />
        </TouchableOpacity>

        <Text style={{ color: "#222", fontSize: 18 }}>Select brand</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            columnGap: 10,
            rowGap: 10,
            margin: 10,
          }}
        >
          {carBrandArray.map((brand, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleBrandSelection(brand, index)}
                style={brand.active ? styles.active : styles.inActive}
              >
                <Text style={styles.genderText}>{brand?.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  nav: {
    alignItems: "center",
    justifyContent: "left",
    gap: 80,
    flexDirection: "row",
    marginBottom: 30,
    padding: 10,
  },

  backText: {
    fontSize: 22,
    color: "#222",
  },

  headerText: {
    color: "#222",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    padding: 10,
  },
  active: {
    backgroundColor: "#007FFF",
    borderRadius: 5,
  },

  inActive: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
  },
  genderText: {
    padding: 10,
    color: "#ffffff",
    padding: 6,
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
  ibackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#c8c6c4",
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
});
