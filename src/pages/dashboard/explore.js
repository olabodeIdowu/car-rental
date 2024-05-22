import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { useRef, useState } from "react";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const latlng = [
  {
    latitude: 6.518937439068408,
    longitude: 3.3742970049778456,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  {
    latitude: 6.5157306229978404,
    longitude: 3.370869937457866,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  {
    latitude: 6.518528849743739,
    longitude: 3.3695738828321273,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  {
    latitude: 6.520646081727557,
    longitude: 3.3733000398811237,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
];

export default function ExploreScreen({ route: params }) {
  const navigation = useNavigation();
  const mapRef = useRef(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFound, setIsFound] = useState(false);
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

  const goToTokyo = () => {
    //Animate the user to new region. Complete this animation in 3 seconds 2 parameters final destination and time in milleseconds
    mapRef.current.animateToRegion(initialRegion, 3 * 1000);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {latlng.map((m, i) => {
          return (
            <Marker
              onPress={() => setIsFound(true)}
              key={i}
              coordinate={{
                latitude: m?.latitude,
                longitude: m?.longitude,
                latitudeDelta: m?.latitudeDelta,
                longitudeDelta: m?.latitudeDelta,
              }}
              pinColor="green"
              //image={require("./japaneseFlag.png")} //uses relative file path.
            ></Marker>
          );
        })}

        {/* CustomMarker has to be a child of Marker*/}
        {/* <Marker>
          <CustomMarker />
        </Marker> */}
      </MapView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isFound}
        onRequestClose={() => {
          setIsFound(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ position: "absolute", right: 10, top: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  setIsFound(false);
                }}
                style={styles.closebackground}
                activeOpacity={0.4}
              >
                <MaterialCommunityIcons name="close" color="#222" size={18} />
              </TouchableOpacity>
            </View>
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
                    style={{
                      color: "#222",
                      fontSize: 16,
                      fontWeight: 800,
                    }}
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
                    style={{
                      color: "#666",
                      fontSize: 16,
                      fontWeight: 800,
                    }}
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
                    style={{
                      color: "#666",
                      fontSize: 16,
                      fontWeight: 800,
                    }}
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
                    style={{
                      color: "#666",
                      fontSize: 16,
                      fontWeight: 800,
                    }}
                  >
                    5 Seats
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

//create our custom marker component.
function CustomMarker() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Tokyo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  searchModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  sortbackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#007FFF",
  },
  closebackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#c8c6c4",
    width: 20,
    height: 20,
    borderRadius: "50%",
  },
});
