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
import brands from "../../assets/dev_data/brands";
import carTypes from "../../assets/dev_data/carTypes";
import transmissons from "../../assets/dev_data/transmissons";

export default function FilterScreen({ route: { params } }) {
  const [activeTab, setActiveTab] = useState("apply");
  const [carTypeArray, setCarTypeArray] = useState(carTypes);
  const [transmissionArray, setTransmissionArray] = useState(transmissons);
  const [brandArray, setBrandArray] = useState(brands);
  const [carType, setCarType] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carTransmission, setCarTransmission] = useState("");
  const [carprice, setCarPrice] = useState("");
  const [carReview, setCarReview] = useState("");

  const navigation = useNavigation();

  const [ratingStars, setRatingStars] = useState([
    { rate: "rate1", active: false, rates: "4.5 and above" },
    { rate: "rate2", active: false, rates: "4.0 - 4.5" },
    { rate: "rate3", active: false, rates: "3.5 - 4.0" },
    { rate: "rate4", active: false, rates: "3.0 - 3.5" },
    { rate: "rate5", active: false, rates: "2.5 - 3.0" },
  ]);

  function handleReset() {
    setCarBrand();
    setCarTransmission();
    setCarType();
    setCarPrice();
    setCarReview();
  }
  //   function handleFilter() {}

  function handleRatings(p, i) {
    setRatingStars((ratings) => {
      return ratings.map((r, index) => {
        return {
          ...r,
          active: i === index ? true : false,
        };
      });
    });
  }
  function handlePrice(price) {
    setCarPrice(price);
  }

  function handleCarType(p, i) {
    setCarTypeArray((cartype) => {
      return cartype.map((ct, index) => {
        return {
          ...ct,
          active: i === index ? true : false,
        };
      });
    });
    setCarType(p);
  }
  function handleCarTransmission(p, i) {
    setTransmissionArray((cartransmission) => {
      return cartransmission.map((ct, index) => {
        return {
          ...ct,
          active: i === index ? true : false,
        };
      });
    });
    setCarTransmission(p);
  }
  function handleCarBrand(p, i) {
    setBrandArray((carbrand) => {
      return carbrand.map((cb, index) => {
        return {
          ...cb,
          active: i === index ? true : false,
        };
      });
    });
    setCarBrand(p);
  }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("car-details-screen");
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

        <Text style={{ color: "#222", fontSize: 18 }}>Filter</Text>
      </View>

      <View>
        <Text style={[styles.filterHeader, { marginTop: 10 }]}>Type</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 10,
              rowGap: 10,
              margin: 10,
            }}
          >
            {carTypeArray.map((c, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCarType(c, index)}
                  style={c.active ? styles.active : styles.inActive}
                >
                  <Text style={styles.genderText}>{c?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={[styles.filterHeader]}>Price Range (Hourly)</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#c8c6c4",
              height: 4,
              borderRadius: 25,
              width: 70,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#007FFF",
              borderRadius: "50%",
              width: 15,
              height: 15,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#007FFF",
              height: 4,
              borderRadius: 25,
              width: 200,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#007FFF",
              borderRadius: "50%",
              width: 15,
              height: 15,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#c8c6c4",
              height: 4,
              borderRadius: 25,
              width: 70,
            }}
          ></View>
        </View>
        <View style={[styles.flex, { paddingTop: 10, paddingBottom: 10 }]}>
          {["$50", "$100", "$150", "$200", "$250", "$300", "$350", "$400"].map(
            (p, i) => {
              return (
                <Text
                  key={i}
                  style={{ fontSize: 16, color: "#333", fontWeight: 500 }}
                >
                  {p}
                </Text>
              );
            }
          )}
        </View>
      </View>
      <View>
        <Text style={[styles.filterHeader]}>Reviews</Text>
        {ratingStars.map((r, i) => {
          return (
            <View
              key={i}
              style={[styles.flex, { paddingTop: 5, paddingBottom: 5 }]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                {ratingStars.map((icon, i) => {
                  return (
                    <Pressable style={styles.flexRow} key={i}>
                      <View style={styles.flexRow}>
                        <MaterialCommunityIcons
                          name="star"
                          color="gold"
                          size={26}
                        />
                      </View>
                    </Pressable>
                  );
                })}
              </View>
              <View>
                {r?.active ? (
                  <Pressable onPress={() => handleRatings(r, i)}>
                    <MaterialCommunityIcons
                      name="circle-slice-8"
                      color="#6497b1"
                      size={26}
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => handleRatings(r, i)}>
                    <MaterialCommunityIcons
                      name="circle-outline"
                      color="#999"
                      size={26}
                    />
                  </Pressable>
                )}
              </View>
            </View>
          );
        })}
      </View>
      <View>
        <Text
          style={[styles.filterHeader, { marginTop: 10, marginBottom: 10 }]}
        >
          Transmission
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 10,
              rowGap: 10,
              margin: 10,
            }}
          >
            {transmissionArray.map((t, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCarTransmission(t, index)}
                  style={t.active ? styles.active : styles.inActive}
                >
                  <Text style={styles.genderText}>{t?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text
          style={[styles.filterHeader, { marginTop: 10, marginBottom: 10 }]}
        >
          Brand
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              columnGap: 10,
              rowGap: 10,
              margin: 10,
            }}
          >
            {brandArray.map((b, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCarBrand(b, index)}
                  style={b.active ? styles.active : styles.inActive}
                >
                  <Text style={styles.genderText}>{b?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomView}>
        <View style={[styles.flex, { padding: 10 }]}>
          <TouchableOpacity
            style={[
              styles.pickDriverBtn,
              activeTab === "reset" ? styles.activeTab : "",
            ]}
            onPress={() => {
              setActiveTab("reset");
              handleReset;
            }}
            activeOpacity={0.4}
          >
            <Text style={{ color: "#6497b1", fontWeight: 700, fontSize: 20 }}>
              Reset Filter
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.pickDriverBtn,
              activeTab === "apply" ? styles.activeTab : "",
            ]}
            onPress={() => {
              setActiveTab("apply");
              navigation.navigate("dashboard-screen");
              // navigation.navigate("dashboard-screen", {"filter Array"})
            }}
            activeOpacity={0.4}
          >
            <Text style={{ color: "#6497b1", fontWeight: 700, fontSize: 20 }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "#fafafa",
    padding: 10,
  },
  filterHeader: {
    color: "#333",
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 19,
    fontWeight: 800,
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
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 14,
  },
});
