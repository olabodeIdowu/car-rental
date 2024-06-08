import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
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
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import CreateReviewScreen from "../reviews/createReview";

export default function MyBookingScreen({ route: { params } }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
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

        <Text style={{ color: "#222", fontSize: 18 }}>My Booking</Text>
      </View>

      <View style={[styles.flex, { paddingBottom: 7, paddingTop: 7 }]}>
        <Pressable
          style={
            activeTab === "upcoming"
              ? {
                  borderBottomWidth: 2,
                  borderColor: "#6497b1",
                }
              : ""
          }
          onPress={() => setActiveTab("upcoming")}
        >
          <Text
            style={{
              color: activeTab === "upcoming" ? "#6497b1" : "#555",
              fontSize: 18,
              paddingBottom: 10,
            }}
          >
            Upcoming
          </Text>
        </Pressable>
        <Pressable
          style={
            activeTab === "completed"
              ? {
                  borderBottomWidth: 2,
                  borderColor: "#6497b1",
                }
              : ""
          }
          onPress={() => setActiveTab("completed")}
        >
          <Text
            style={{
              color: activeTab === "completed" ? "#6497b1" : "#555",
              fontSize: 18,
              paddingBottom: 10,
            }}
          >
            Completed
          </Text>
        </Pressable>
        <Pressable
          style={
            activeTab === "cancelled"
              ? {
                  borderBottomWidth: 2,
                  borderColor: "#6497b1",
                }
              : ""
          }
          onPress={() => setActiveTab("cancelled")}
        >
          <Text
            style={{
              color: activeTab === "cancelled" ? "#6497b1" : "#555",
              fontSize: 18,
              paddingBottom: 10,
            }}
          >
            Cancelled
          </Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVericalScrollIndicator={false}
        bounces={true}
      >
        {activeTab === "upcoming" && <Upcoming />}
        {activeTab === "completed" && <Completed />}
        {activeTab === "cancelled" && <Cancelled />}
      </ScrollView>
    </View>
  );
}

function Upcoming() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("e-ticket");
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 39,
    longitude: 34,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const initialRegion = {
    latitude: 9.082,
    longitude: 8.6753,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View>
      {[0, 0].map((booking, i) => {
        return (
          <Pressable
            key={i}
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
                <Text style={{ color: "#222", fontSize: 16, fontWeight: 800 }}>
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

            <View style={[styles.flex, { paddingTop: 10, paddingBottom: 10 }]}>
              <Text
                style={{
                  color: "#666",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Car Location
              </Text>
              <Pressable>
                <Text
                  style={{ color: "#6497b1", fontSize: 16, fontWeight: 800 }}
                >
                  Navigate
                </Text>
              </Pressable>
            </View>
            <MapView
              style={styles.map}
              initialRegion={initialRegion}
              onRegionChangeComplete={(region) => setRegion(region)}
            >
              <Marker
                coordinate={initialRegion}
                pinColor="green"
                //image={require("./japaneseFlag.png")} //uses relative file path.
              />
            </MapView>

            <View style={[styles.flexRow, { paddingBottom: 10 }]}>
              <TouchableOpacity
                style={[
                  styles.pickDriverBtn,
                  activeTab === "cancel" ? styles.activeTab : "",
                ]}
                onPress={() => {
                  setActiveTab("cancel");
                  // cancel();
                }}
                activeOpacity={0.4}
              >
                <Text
                  style={{ color: "#6497b1", fontWeight: 700, fontSize: 20 }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.pickDriverBtn,
                  activeTab === "e-ticket" ? styles.activeTab : "",
                ]}
                onPress={() => {
                  setActiveTab("e-ticket");
                  // remove();
                }}
                activeOpacity={0.4}
              >
                <Text
                  style={{ color: "#6497b1", fontWeight: 700, fontSize: 20 }}
                >
                  E-Ticket
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

function Completed() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [activeTab, setActiveTab] = useState("add-review");
  const navigation = useNavigation();

  return (
    <View>
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
            <Text style={{ fontWeight: 700, fontSize: 19 }}>Hyundai Verna</Text>
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
            <MaterialCommunityIcons name="seatbelt" color="#007FFF" size={24} />
            <Text style={{ color: "#666", fontSize: 16, fontWeight: 800 }}>
              5 Seats
            </Text>
          </View>
        </View>
        <View style={[styles.flexRow, { paddingTop: 15, paddingBottom: 15 }]}>
          <TouchableOpacity
            style={[
              styles.pickDriverBtn,
              activeTab === "re-book" ? styles.activeTab : "",
            ]}
            onPress={() => {
              setActiveTab("re-book");
              navigation.navigate("car-details-screen");
              //onPress={() => navigation.navigate("car-details-screen", {id: "the id of the car to be rebooked"})}
            }}
            activeOpacity={0.4}
          >
            <Text style={{ color: "#6497b1", fontWeight: 700, fontSize: 20 }}>
              Re-Book
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.pickDriverBtn,
              activeTab === "add-review" ? styles.activeTab : "",
            ]}
            onPress={() => {
              setActiveTab("add-review");
              setShowReview(true);
              // remove();
            }}
            activeOpacity={0.4}
          >
            <Text style={{ color: "#6497b1", fontWeight: 700, fontSize: 20 }}>
              Add Review
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>

      {showReview && (
        <CreateReviewScreen setShowCreateReviewModal={setShowReview} />
      )}
    </View>
  );
}

function Cancelled() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
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
            <Text style={{ fontWeight: 700, fontSize: 19 }}>Hyundai Verna</Text>
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
            <MaterialCommunityIcons name="seatbelt" color="#007FFF" size={24} />
            <Text style={{ color: "#666", fontSize: 16, fontWeight: 800 }}>
              5 Seats
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.button, { paddingBottom: 15 }]}
          onPress={() => navigation.navigate("car-details-screen")}
          //onPress={() => navigation.navigate("car-details-screen", {id: "the id of the car to be rebooked"})}
          activeOpacity={0.4}
        >
          {isLoading ? (
            <View style={styles.horizontal}>
              <ActivityIndicator />
            </View>
          ) : (
            <Text style={styles.buttonText}>Re-Book</Text>
          )}
        </Pressable>
      </Pressable>
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
    justifyContent: "left",
    gap: 80,
    flexDirection: "row",
    marginTop: 50,
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
  activeTab: {
    backgroundColor: "#007FFF",
    color: "#ffffff",
  },
  pickDriverBtn: {
    width: "40%",
    alignItems: "center",
    backgroundColor: "#fafafa",
    padding: 15,
    borderRadius: 40,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#007FFF",
    padding: 15,
    color: "#ffffff",
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 20,
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
  bottomView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 14,
  },
  map: {
    width: "100%",
    height: "20%",
    marginBottom: 20,
  },
});
