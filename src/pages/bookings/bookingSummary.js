import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BookingSummaryScreen({ route: { params } }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  // const { time1, time2, days, hours } = params;

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("book-now-screen");
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

        <Text style={{ color: "#222", fontSize: 18 }}>Review Summary</Text>
      </View>

      <View
        style={{
          marginBottom: 10,
          backgroundColor: "#ffffff",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={styles.imagebackground}>
          <Image
            style={{
              width: 80,
              height: 80,
            }}
            source={require("../../../assets/cars/suv5.jpg")}
          />
        </View>

        <View>
          <View style={[styles.flex, { width: "80%" }]}>
            <View style={styles.brandBackground}>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#6497b1",
                  padding: 3,
                }}
              >
                Sedan
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <MaterialCommunityIcons name="star" color="gold" size={20} />
              <Text
                style={{
                  fontSize: 14,
                }}
              >
                4.9
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              fontWeight: 800,
              color: "#666",
              paddingBottom: 10,
            }}
          >
            Hyundai Verna
          </Text>

          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text
              style={{
                color: "#007FFF",
                fontSize: 16,
                paddingTop: 5,
                paddingBottom: 5,
                fontWeight: 800,
              }}
            >
              $30.00
            </Text>
            <Text style={{ color: "#666", fontSize: 16, fontWeight: 600 }}>
              /hr
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderTopWidth: 0.2,
          borderTopColor: "#c8c6c4",
          marginTop: 15,
        }}
      >
        <View style={[styles.flex, { paddingTop: 10 }]}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Pick-Up Date & Time
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            {params?.pickUpDate} | {params?.time1.slice(0, 5)}
          </Text>
        </View>
        <View style={styles.flex}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Return Date & Time
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            {params?.returnDate} | {params?.time2.slice(0, 5)}
          </Text>
        </View>
        <View style={styles.flex}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Driver Type
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            {params?.driverType}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <View style={styles.flex}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Amount
          </Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text
              style={{
                color: "#444",
                fontSize: 16,
                paddingTop: 5,
                paddingBottom: 5,
                fontWeight: 700,
              }}
            >
              $30.00
            </Text>
            <Text style={{ color: "#666", fontSize: 16, fontWeight: 600 }}>
              /hr
            </Text>
          </View>
        </View>
        <View style={styles.flex}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Total Hours
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            {params?.hours}
          </Text>
        </View>
        {params?.driverType === "with-driver" ? (
          <View style={styles.flex}>
            <Text
              style={{
                color: "#666",
                fontSize: 16,
                paddingTop: 5,
                paddingBottom: 5,
                fontWeight: 400,
              }}
            >
              Fees
            </Text>
            <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
              $50
            </Text>
          </View>
        ) : (
          ""
        )}
        <View style={styles.flex}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Fees
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            $50
          </Text>
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 0.18,
          borderBottomColor: "#c8c6c4",
          marginTop: 20,
        }}
      >
        <View style={[styles.flex, { paddingTop: 10, paddingBottom: 15 }]}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Total
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            $770.00
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <View style={styles.flex}>
          <View style={styles.flexRow}>
            <MaterialCommunityIcons
              name="credit-card"
              color="#007FFF"
              size={26}
            />
            <Text style={{ color: "#666", fontSize: 18, fontWeight: 600 }}>
              Card
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate("card-payment-screen")}
          >
            <Text style={{ color: "#6497b1", fontSize: 18, fontWeight: 800 }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.bottomView, { marginLeft: 10, marginRight: 10 }]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate("view-receipt-screen")}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  nav: {
    alignItems: "center",
    justifyContent: "left",
    gap: 80,
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 20,
  },

  backText: {
    fontSize: 22,
    color: "#222",
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

  imagebackground: {
    backgroundColor: "#f2f3f4",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#c8c6c4",
    width: 100,
    height: 100,
    borderRadius: 10,
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
  brandBackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#c8c6c4",
    borderRadius: 8,
  },
});
