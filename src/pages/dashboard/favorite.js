import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  RefreshControl,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import FavoriteModal from "../../components/favoriteModal";
import carTypes from "../../../assets/dev_data/carTypes";

export default function FavoriteScreen({ route: { params } }) {
  const [isFavorite, setIsFavorite] = useState(true);
  const [carTypeArray, setCarTypeArray] = useState(carTypes);
  const [openFavoriteModal, setOpenFavoriteModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function handleCarType(p, i) {
    setCarTypeArray((type) => {
      return type.map((ct, index) => {
        return {
          ...ct,
          active: i === index ? true : false,
        };
      });
    });
  }

  function handleCancel() {
    setIsFavorite(true);
  }

  function handleRemove() {
    setIsFavorite(false);
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

        <Text style={{ color: "#222", fontSize: 18 }}>Favorite</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("goto-search-screen")}
          style={styles.ibackground}
          activeOpacity={0.4}
        >
          <MaterialCommunityIcons name="magnify" color="#666" size={26} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 20,
          padding: 10,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {carTypeArray.map((c, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleCarType(c, index)}
                style={c?.active ? styles.active : styles.inActive}
              >
                <Text style={styles.genderText}>{c?.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <Pressable
          style={[styles.car, { padding: 10 }]}
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
                onPress={() => {
                  setOpenFavoriteModal(true);
                  // setIsFavorite(!isFavorite)
                }}
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
      {openFavoriteModal && (
        <FavoriteModal
          openFavoriteModal={openFavoriteModal}
          setOpenFavoriteModal={setOpenFavoriteModal}
          remove={handleRemove}
          cancel={handleCancel}
        />
      )}
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
  active: {
    backgroundColor: "#007FFF",
    borderRadius: 5,
    marginRight: 10,
  },

  inActive: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    marginRight: 10,
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
