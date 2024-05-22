import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen({ route: { params } }) {
  const [searchText, setSearchText] = useState(false);
  const [resultFound, setResultFound] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const navigation = useNavigation();

  function handleSearch() {
    if (recentSearches.length < 3) {
      setRecentSearches((s) => {
        return [...s, searchText];
      });
    } else {
      setRecentSearches([]);
    }
  }

  function closeRecentSearch(index) {
    setRecentSearches((s) => {
      return s.filter((s, i) => {
        return i !== index;
      });
    });
  }

  function clearSearchText() {
    setSearchText("");
  }

  return (
    <View style={styles.container}>
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

        <View
          style={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f2f3f4",
            paddingLeft: 25,
            paddingRight: 15,
            borderRadius: 8,
            position: "relative",
            left: 0,
          }}
        >
          <View style={{ position: "absolute", left: 10 }}>
            <Pressable onPress={handleSearch}>
              <MaterialCommunityIcons
                name="magnify"
                color="#6497b1"
                size={26}
              />
            </Pressable>
          </View>
          <TextInput
            style={styles.searchInput}
            name="search"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            placeholder="Search.."
            placeholderTextColor="#444"
          />
          <Pressable onPress={clearSearchText} style={styles.closebackground}>
            <MaterialCommunityIcons name="close" color="#6497b1" size={16} />
          </Pressable>
        </View>
      </View>
      <View>
        {resultFound ? (
          <View style={[styles.flex, { paddingBottom: 7, paddingTop: 7 }]}>
            <Text style={{ color: "#555", fontSize: 20, fontWeight: 700 }}>
              Results for "{searchText}"
            </Text>
            <Text style={{ color: "#6497b1", fontWeight: 700 }}>
              152 Results Found
            </Text>
          </View>
        ) : (
          <View>
            <View>
              <Text
                style={{
                  color: "#444",
                  paddingTop: 10,
                  paddingBottom: 5,
                  fontSize: 19,
                  fontWeight: 700,
                }}
              >
                Recent Search
              </Text>
              {recentSearches.map((search, i) => {
                return (
                  <View
                    style={[styles.flex, { paddingTop: 7, paddingBottom: 7 }]}
                  >
                    <Text
                      style={{
                        color: "#666",
                        fontSize: 16,
                        fontWeight: 400,
                      }}
                    >
                      {search}
                    </Text>
                    <Pressable onPress={() => closeRecentSearch(i)}>
                      <MaterialCommunityIcons
                        name="close"
                        color="#666"
                        size={16}
                      />
                    </Pressable>
                  </View>
                );
              })}
            </View>
            <Text
              style={{
                color: "#444",
                paddingTop: 10,
                fontSize: 19,
                fontWeight: 700,
              }}
            >
              Recent View
            </Text>
          </View>
        )}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <Pressable
          style={styles.car}
          onPress={() => navigation.navigate("car-details-screen")}
        >
          <View
            style={{
              backgroundColor: "#f5f5f5",
              padding: 10,
              borderRadius: 7,
            }}
          >
            <View style={[styles.flex, { marginBottom: 10 }]}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <MaterialCommunityIcons name="star" color="gold" size={26} />
                <Text>4.9</Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsFavorite(!isFavorite)}
                activeOpacity={0.4}
              >
                {isFavorite ? (
                  <MaterialCommunityIcons name="heart" color="red" size={26} />
                ) : (
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color="#222"
                    size={26}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Image
              style={{
                width: 300,
                height: 150,
                marginLeft: "auto",
                marginRight: "auto",
              }}
              source={require("../../assets/cars/suv5.jpg")}
            />
          </View>

          <View style={[styles.flex, { marginTop: 10, marginBottom: 10 }]}>
            <View>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#007FFF",
                }}
              >
                Sedan
              </Text>
              <Text style={{ fontWeight: 700, fontSize: 19 }}>
                Hyundai Verna
              </Text>
            </View>

            <View style={styles.flexRow}>
              <Text
                style={{
                  color: "#007FFF",
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                $30
              </Text>
              <Text style={{ color: "#222", fontSize: 16, fontWeight: 800 }}>
                /hr
              </Text>
            </View>
          </View>

          <View style={[styles.flex, { marginTop: 15 }]}>
            <View style={styles.flexRow}>
              <MaterialCommunityIcons name="wrench" color="#007FFF" size={24} />
              <Text style={{ color: "#666", fontSize: 16, fontWeight: 800 }}>
                Manual
              </Text>
            </View>
            <View style={styles.flexRow}>
              <MaterialCommunityIcons
                name="gas-station"
                color="#007FFF"
                size={24}
              />
              <Text style={{ color: "#666", fontSize: 16, fontWeight: 800 }}>
                Petrol
              </Text>
            </View>
            <View style={styles.flexRow}>
              <MaterialCommunityIcons
                name="seatbelt"
                color="#007FFF"
                size={24}
              />
              <Text style={{ color: "#666", fontSize: 16, fontWeight: 800 }}>
                5 Seats
              </Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  flexColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fafafa",
    padding: 10,
  },
  primaryHeader: {
    color: "#c8c6c4",
    fontSize: 16,
    marginTop: 50,
  },
  nav: {
    alignItems: "center",
    gap: 20,
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 10,
  },

  backText: {
    fontSize: 22,
    color: "#222",
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
  car: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    padding: 7,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 14,
  },
  searchInput: {
    padding: 15,
    color: "#444",
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
  closebackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#6497b1",
    width: 20,
    height: 20,
    borderRadius: "50%",
  },
});
