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
import {
  BmwComponent,
  MercedesBenzComponent,
  TelsaComponent,
  ToyotaComponent,
} from "../../components/svg";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ route: { params } }) {
  const [showLocation, setShowLocation] = useState(false);
  const [newNotification, setNewNotification] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.header}>
      <View>
        <Text style={styles.primaryHeader}>Location</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
            }}
            onPress={() =>
              navigation.navigate("explore-screen", {
                openSearch,
                setOpenSearch,
              })
            }
          >
            <MaterialCommunityIcons
              name="map-marker"
              color="#ffffff"
              size={26}
            />
            <Text style={{ color: "#c8c6c4" }}>Lagos Nigeria, Nigeria</Text>
            {showLocation ? (
              <MaterialCommunityIcons
                name="menu-up-outline"
                color="#ffffff"
                size={26}
              />
            ) : (
              <MaterialCommunityIcons
                name="menu-down-outline"
                color="#ffffff"
                size={26}
              />
            )}
          </Pressable>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("notification-screen");
            }}
            style={styles.notificationbackground}
            activeOpacity={0.4}
          >
            {newNotification ? (
              <MaterialCommunityIcons
                name="bell-badge-outline"
                color="#ffffff"
                size={26}
              />
            ) : (
              <MaterialCommunityIcons
                name="bell-outline"
                color="#ffffff"
                size={26}
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
            margin: 10,
          }}
        >
          <View
            style={[
              styles.search,
              { backgroundColor: "#ffffff", paddingLeft: 10 },
            ]}
          >
            <MaterialCommunityIcons name="magnify" color="#666" size={26} />
            <TextInput placeholder="Search" style={styles.searchInput} />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("goto-filter-screen");
            }}
            style={styles.sortbackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons
              name="tune-variant"
              color="#007FFF"
              size={26}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.mainbody}>
          <View style={[styles.flex, { marginTop: 10 }]}>
            <Text style={{ fontWeight: 700, fontSize: 22 }}>Brands</Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => navigation.navigate("select-car-brand-screen")}
            >
              <Text style={{ color: "#00744", color: "#007FFF", fontSize: 16 }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.flex, { marginTop: 10 }]}>
            <Pressable
              onPress={() =>
                navigation.navigate("select-car-brand-screen", { brand: "Bmw" })
              }
              style={styles.flexColumn}
            >
              <View style={styles.brandbackground}>
                <BmwComponent />
              </View>
              <Text style={{ color: "#000" }}>BMW</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate("select-car-brand-screen", {
                  brand: "Toyota",
                })
              }
              style={styles.flexColumn}
            >
              <View style={styles.brandbackground}>
                <ToyotaComponent />
              </View>
              <Text style={{ color: "#000" }}>Toyota</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate("select-car-brand-screen", {
                  brand: "Mercedes",
                })
              }
              style={styles.flexColumn}
            >
              <View style={styles.brandbackground}>
                <MercedesBenzComponent />
              </View>
              <Text style={{ color: "#000" }}>Mercedes</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate("select-car-brand-screen", {
                  brand: "Telsa",
                })
              }
              style={styles.flexColumn}
            >
              <View style={styles.brandbackground}>
                <TelsaComponent />
              </View>
              <Text style={{ color: "#000" }}>Telsa</Text>
            </Pressable>
          </View>

          <View style={[styles.flex, { marginTop: 30, marginBottom: 10 }]}>
            <Text style={{ fontWeight: 700, fontSize: 22 }}>Popular Cars</Text>
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => {
                navigation.navigate("see-popular-car-screen");
              }}
            >
              <Text style={{ color: "#00744", color: "#007FFF", fontSize: 16 }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <Pressable
              style={styles.car}
              onPress={() => navigation.navigate("car-details-screen")}
            >
              <View
                style={{
                  backgroundColor: "#fafafa",
                  padding: 5,
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
                    <MaterialCommunityIcons
                      name="star"
                      color="gold"
                      size={26}
                    />
                    <Text>4.9</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setIsFavorite(!isFavorite)}
                    activeOpacity={0.4}
                  >
                    {isFavorite ? (
                      <MaterialCommunityIcons
                        name="heart"
                        color="red"
                        size={26}
                      />
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
                  <Text
                    style={{ color: "#222", fontSize: 16, fontWeight: 800 }}
                  >
                    /hr
                  </Text>
                </View>
              </View>

              <View style={[styles.flex, { marginTop: 15 }]}>
                <View style={styles.flexRow}>
                  <MaterialCommunityIcons
                    name="wrench"
                    color="#007FFF"
                    size={24}
                  />
                  <Text
                    style={{ color: "#666", fontSize: 16, fontWeight: 800 }}
                  >
                    Manual
                  </Text>
                </View>
                <View style={styles.flexRow}>
                  <MaterialCommunityIcons
                    name="gas-station"
                    color="#007FFF"
                    size={24}
                  />
                  <Text
                    style={{ color: "#666", fontSize: 16, fontWeight: 800 }}
                  >
                    Petrol
                  </Text>
                </View>
                <View style={styles.flexRow}>
                  <MaterialCommunityIcons
                    name="seatbelt"
                    color="#007FFF"
                    size={24}
                  />
                  <Text
                    style={{ color: "#666", fontSize: 16, fontWeight: 800 }}
                  >
                    5 Seats
                  </Text>
                </View>
              </View>
            </Pressable>
          </ScrollView>
        </View>
      </View>
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
  primaryHeader: {
    color: "#fafafa",
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: 700,
  },
  header: {
    padding: 10,
    height: 200,
    backgroundColor: "#007FFF",
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
  },
  mainbody: {
    padding: 10,
    backgroundColor: "#fafafa",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
  },
  searchInput: {
    width: "75%",
    borderWidth: 0,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 6,
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
    height: 310,
  },
  notificationbackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#c8c6c4",
    width: 35,
    height: 35,
    borderRadius: 8,
  },
  sortbackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },

  brandbackground: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
});
