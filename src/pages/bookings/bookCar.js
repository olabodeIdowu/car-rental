import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function BookCarScreen({ route: { params } }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("self-driver");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [dateType, setDateType] = useState("");
  const [type, setType] = useState("");

  let time1 = `${pickUpTime.toString().split(" ")[4]}`;
  let time2 = `${returnTime.toString().split(" ")[4]}`;

  // Calculating the time difference of two dates
  let Difference_In_Time =
    new Date(`${returnDate.toString()}`).getTime() -
    new Date(`${pickUpDate.toString()}`).getTime();

  // Calculating the no. of days between two dates
  let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  let Difference_In_Hours = Math.round(Difference_In_Time / (1000 * 3600));

  const showDatePicker = (date) => {
    setDateType(date);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    if (type === "pick-up") {
      setPickUpDate(date);
    } else {
      setReturnDate(date);
    }

    hideDatePicker();
  };

  const handleConfirmTime = (time) => {
    if (type === "pick-up") {
      setPickUpTime(time);
    } else {
      setReturnTime(time);
    }

    hideDatePicker();
  };

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

        <Text style={{ color: "#222", fontSize: 18 }}>Book Car</Text>
      </View>
      <Image
        style={{
          width: 400,
          height: 200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        source={require("../../../assets/cars/suv5.jpg")}
      />
      <View
        style={{
          backgroundColor: "#ffffff",
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          flex: 1,
        }}
      >
        <View style={styles.flex}>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 14,
              color: "#007FFF",
            }}
          >
            Sedan
          </Text>
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
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#c8c6c4" }}>
          <Text
            style={{
              fontSize: 22,
              marginTop: 10,
              fontWeight: 800,
              color: "#666",
              paddingBottom: 10,
            }}
          >
            Hyundai Verna
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              color: "#666",
              paddingTop: 10,
            }}
          >
            BOOK CAR
          </Text>
          <Text
            style={{
              color: "#666",
              fontSize: 20,
              fontWeight: 700,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            Rent Type
          </Text>
          <View style={styles.flex}>
            <TouchableOpacity
              style={[
                styles.pickDriverBtn,
                activeTab === "self-driver" ? styles.activeTab : "",
              ]}
              onPress={() => setActiveTab("self-driver")}
              activeOpacity={0.4}
            >
              <Text style={{ color: "#444", fontWeight: 700, fontSize: 20 }}>
                Self-Driver
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.pickDriverBtn,
                activeTab === "with-driver" ? styles.activeTab : "",
              ]}
              onPress={() => setActiveTab("with-driver")}
              activeOpacity={0.4}
            >
              <Text style={{ color: "#444", fontWeight: 700, fontSize: 20 }}>
                With-Driver
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#d2d2d2",
              borderRadius: 40,
              marginTop: 15,
              marginBottom: 12,
              borderLeftWidth: 5,
              borderLeftColor: "#007FFF",
            }}
          >
            <Text
              style={{
                color: "#666",
                fontSize: 12,
                padding: 10,
              }}
            >
              Additonal $18/hr Driver cost if you choose with driver option
            </Text>
          </View>
        </View>

        <View>
          <View>
            <Text
              style={{
                color: "#555",
                fontWeight: 800,
                fontSize: 22,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              Pick-Up Date and Time
            </Text>
            <View style={styles.flex}>
              <TouchableOpacity
                style={[styles.pickDriverBtn, styles.flexRow]}
                onPress={() => {
                  showDatePicker("date");
                  setType("pick-up");
                }}
                activeOpacity={0.4}
              >
                <View>
                  <Text style={{ color: "#666", fontSize: 12 }}>Date</Text>
                  <Text
                    style={{ color: "#444", fontWeight: 700, fontSize: 16 }}
                  >
                    {pickUpDate === ""
                      ? "4 Sep"
                      : `${pickUpDate.toString().split(" ")[2]}` +
                        " " +
                        `${pickUpDate.toString().split(" ")[1]}`}
                  </Text>
                </View>

                <MaterialCommunityIcons
                  name="calendar"
                  color="#007FFF"
                  size={26}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.pickDriverBtn, styles.flexRow]}
                onPress={() => {
                  showDatePicker("time");
                  setType("pick-up");
                }}
                activeOpacity={0.4}
              >
                <View>
                  <Text style={{ color: "#666", fontSize: 12 }}>Time</Text>
                  <Text
                    style={{ color: "#444", fontWeight: 700, fontSize: 16 }}
                  >
                    {pickUpTime === ""
                      ? "10 : 00 AM"
                      : `${pickUpTime.toString().split(" ")[4]}`}
                  </Text>
                </View>

                <MaterialCommunityIcons
                  name="clock"
                  color="#007FFF"
                  size={26}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: "#555",
                fontWeight: 800,
                fontSize: 22,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              Return Date and Time
            </Text>
            <View style={styles.flex}>
              <TouchableOpacity
                style={[styles.pickDriverBtn, styles.flexRow]}
                onPress={() => {
                  showDatePicker("date");
                  setType("return");
                }}
                activeOpacity={0.4}
              >
                <View>
                  <Text style={{ color: "#666", fontSize: 12 }}>Date</Text>
                  <Text
                    style={{ color: "#444", fontWeight: 700, fontSize: 16 }}
                  >
                    {returnDate === ""
                      ? "4 Oct"
                      : `${returnDate.toString().split(" ")[2]}` +
                        " " +
                        `${returnDate.toString().split(" ")[1]}`}
                  </Text>
                </View>

                <MaterialCommunityIcons
                  name="calendar"
                  color="#007FFF"
                  size={26}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.pickDriverBtn, styles.flexRow]}
                onPress={() => {
                  showDatePicker("time");
                  setType("return");
                }}
                activeOpacity={0.4}
              >
                <View>
                  <Text style={{ color: "#666", fontSize: 12 }}>Time</Text>
                  <Text
                    style={{ color: "#444", fontWeight: 700, fontSize: 16 }}
                  >
                    {returnTime === ""
                      ? "10 : 00 AM"
                      : `${returnTime.toString().split(" ")[4]}`}
                  </Text>
                </View>

                <MaterialCommunityIcons
                  name="clock"
                  color="#007FFF"
                  size={26}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={dateType === "date" ? "date" : "time"}
          onConfirm={
            dateType === "date" ? handleConfirmDate : handleConfirmTime
          }
          onCancel={hideDatePicker}
        />

        <View style={styles.bottomView}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              if (
                pickUpDate !== "" &&
                returnDate !== "" &&
                time1 !== "" &&
                time2 !== ""
              ) {
                navigation.navigate("booking-summary-screen", {
                  pickUpDate:
                    `${pickUpDate.toString().split(" ")[2]}` +
                    " " +
                    `${pickUpDate.toString().split(" ")[1]}`,
                  returnDate:
                    `${returnDate.toString().split(" ")[2]}` +
                    " " +
                    `${returnDate.toString().split(" ")[1]}`,
                  time1: time1,
                  time2: time2,
                  days: Difference_In_Days,
                  hours: Difference_In_Hours,
                  driverType: activeTab,
                });
              } else {
                console.log("ERROR");
                // Alert.alert("Error", [{ text: "OK" }]);
              }
            }}
            activeOpacity={0.4}
          >
            {isLoading ? (
              <View style={styles.horizontal}>
                <ActivityIndicator />
              </View>
            ) : (
              <Text style={styles.buttonText}>Continue</Text>
            )}
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
    height: 310,
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
    alignItems: "center",
    backgroundColor: "#007FFF",
    padding: 15,
    color: "#ffffff",
    borderRadius: 40,
    margin: 20,
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
  boxshadow: {
    marginTop: 5,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 14,
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
