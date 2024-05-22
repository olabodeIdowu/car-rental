import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  Pressable,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function PopularCarListScreen({ route: { params } }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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

        <Text style={{ color: "#222", fontSize: 18 }}>Car List</Text>
        <TouchableOpacity
          onPress={() => setShowSearch(!showSearch)}
          style={styles.ibackground}
          activeOpacity={0.4}
        >
          <MaterialCommunityIcons name="magnify" color="#666" size={26} />
        </TouchableOpacity>
      </View>
      {showSearch && (
        <TextInput placeholder="Search" style={styles.searchInput} />
      )}

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
              source={require("../../../assets/cars/suv5.jpg")}
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
    </SafeAreaView>
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
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },

  backText: {
    fontSize: 22,
    color: "#222",
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
    padding: 10,
  },
  searchInput: {
    width: "45%",
    borderWidth: 0,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 6,
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
