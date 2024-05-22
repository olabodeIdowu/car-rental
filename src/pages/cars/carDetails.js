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
import CreateReviewScreen from "../reviews/createReview";

export default function CarDetailsScreen({ route: { params } }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateReviewModal, setShowCreateReviewModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isActiveTab, setIsActiveTab] = useState("about");
  const navigation = useNavigation();

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

        <Text style={{ color: "#222", fontSize: 18 }}>Car Details</Text>
        <View style={styles.flexRow}>
          <TouchableOpacity
            //   onPress={() => setShowSearch(!showSearch)}
            style={styles.ibackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons
              name="share-variant"
              color="#666"
              size={26}
            />
          </TouchableOpacity>
          <TouchableOpacity
            //   onPress={() => setShowSearch(!showSearch)}
            style={styles.ibackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons
              name="heart-outline"
              color="#666"
              size={26}
            />
          </TouchableOpacity>
        </View>
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
      <View style={[styles.flexRow, { marginTop: 20 }]}>
        <View
          style={{
            backgroundColor: "#007FFF",
            height: 1,
            width: 100,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#007FFF",
            padding: 5,
            width: 30,
            borderRadius: 25,
            height: 15,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#007FFF",
            height: 1,
            width: 100,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        ></View>
      </View>
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
      <Text
        style={{
          fontSize: 22,
          marginTop: 10,
          marginBottom: 20,
          fontWeight: 800,
          color: "#666",
        }}
      >
        Hyundai Verna
      </Text>

      <View>
        <View style={styles.flex}>
          <Pressable onPress={() => setIsActiveTab("about")}>
            <Text
              style={[
                isActiveTab === "about" && styles.activeTab,
                {
                  color: isActiveTab === "about" ? "#007FFF" : "#444",
                  fontSize: 18,
                  padding: 10,
                },
              ]}
            >
              About
            </Text>
          </Pressable>
          <Pressable onPress={() => setIsActiveTab("gallery")}>
            <Text
              style={[
                isActiveTab === "gallery" && styles.activeTab,
                {
                  color: isActiveTab === "gallery" ? "#007FFF" : "#444",
                  fontSize: 18,
                  padding: 10,
                },
              ]}
            >
              Gallery
            </Text>
          </Pressable>
          <Pressable onPress={() => setIsActiveTab("review")}>
            <Text
              style={[
                isActiveTab === "review" && styles.activeTab,
                {
                  color: isActiveTab === "review" ? "#007FFF" : "#444",
                  fontSize: 18,
                  padding: 10,
                },
              ]}
            >
              Review
            </Text>
          </Pressable>
        </View>
        {isActiveTab === "about" && (
          <View>
            <Text
              style={{
                fontWeight: 800,
                color: "#666",
                marginTop: 30,
                marginBottom: 10,
                fontSize: 16,
              }}
            >
              Rent Partner
            </Text>
            <View style={[styles.flex, { marginBottom: 15 }]}>
              <View style={styles.flexRow}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: "50%" }}
                  source={require("./../../../assets/users/user.png")}
                />
                <View>
                  <Text
                    style={{ fontWeight: 700, fontSize: 16, marginBottom: 5 }}
                  >
                    Jenny Doe
                  </Text>
                  <Text>Owner</Text>
                </View>
              </View>

              <View style={[styles.flexRow, { gap: 24 }]}>
                <TouchableOpacity
                  style={styles.ibackground}
                  onPress={() => navigation.navigate("chat-screen")}
                  activeOpacity={0.4}
                >
                  <MaterialCommunityIcons
                    name="chat"
                    color="#007FFF"
                    size={26}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.ibackground}
                  onPress={() => navigation.navigate("calling-phone-screen")}
                  activeOpacity={0.4}
                >
                  <MaterialCommunityIcons
                    name="phone"
                    color="#007FFF"
                    size={26}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={{ fontWeight: 800, marginBottom: 10 }}>About</Text>
              <Text style={{ color: "#666", marginBottom: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                sed sem volutpat, vulputate ex et, commodo nibh. Curabitur
                euismod quis est sit amet cursus. Vivamus varius condimentum
                elit a fringilla. Donec luctus molestie quam a maximus. Vivamus
                a ex tortor. Donec in eros vel dolor volutpat mattis et a urna.
                Nunc a turpis non elit molestie laoreet. Morbi ac magna ac ante
                condimentum dignissim. set up.
              </Text>
            </View>
          </View>
        )}

        {isActiveTab === "gallery" && (
          <View>
            <View style={{ marginTop: 15, marginBottom: 15 }}>
              <View style={[styles.flex, { marginBottom: 10 }]}>
                <View style={styles.flexRow}>
                  <Text
                    style={{ color: "#555", fontSize: 18, fontWeight: 700 }}
                  >
                    Gallery
                  </Text>
                  <Text style={{ color: "#007FFF" }}>(25)</Text>
                </View>
                <Text style={{ color: "#007FFF", fontSize: 16 }}>View All</Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    justifyContent: "center",
                    marginTop: 10,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    columnGap: 10,
                    rowGap: 10,
                  }}
                >
                  <View style={styles.carbackground}>
                    <Image
                      style={{ width: 150, height: 150 }}
                      source={require("./../../../assets/cars/suv5.jpg")}
                    />
                  </View>
                  <View style={styles.carbackground}>
                    <Image
                      style={{ width: 150, height: 150 }}
                      source={require("./../../../assets/cars/suv5.jpg")}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        )}

        {isActiveTab === "review" && (
          <View>
            <View style={[styles.flex, { marginTop: 20 }]}>
              <Text style={{ color: "#555", fontWeight: 800, fontSize: 18 }}>
                Reviews
              </Text>
              <TouchableOpacity
                onPress={() => setShowCreateReviewModal(true)}
                activeOpacity={0.4}
                style={styles.flexRow}
              >
                <MaterialCommunityIcons name="pen" color="#007FFF" size={26} />
                <Text
                  style={{ color: "#007FFF", fontWeight: 600, fontSize: 16 }}
                >
                  add review
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              <View
                style={[
                  styles.boxshadow,
                  styles.boxshadowProps,
                  { padding: 25 },
                ]}
              >
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  sed sem volutpat, vulputate ex et, commodo nibh. Curabitur
                  euismod quis est sit amet cursus. Vivamus varius condimentum
                  elit a fringilla. Donec luctus molestie quam a maximus.
                  Vivamus a ex tortor. Donec in eros vel dolor volutpat mattis
                  et a urna. Nunc a turpis non elit molestie laoreet. Morbi ac
                  magna ac ante condimentum dignissim. set up.
                </Text>
                <View
                  style={[styles.flex, { marginBottom: 10, marginTop: 15 }]}
                >
                  <View style={styles.flexRow}>
                    <Image
                      style={{ width: 50, height: 50, borderRadius: "50%" }}
                      source={require("./../../../assets/users/user.png")}
                    />
                    <View>
                      <Text
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          marginBottom: 5,
                        }}
                      >
                        Jenny Doe
                      </Text>
                      <Text>Lagos, NG</Text>
                    </View>
                  </View>
                  <Text>12/02/2024</Text>
                </View>
                <View></View>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
      {showCreateReviewModal && (
        <CreateReviewScreen
          showCreateReviewModal={showCreateReviewModal}
          setShowCreateReviewModal={setShowCreateReviewModal}
        />
      )}
      <View
        style={[
          styles.bottomView,
          { marginLeft: 10, marginRight: 10, width: "100%" },
        ]}
      >
        <View style={styles.flex}>
          <View>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 14,
                color: "#555",
              }}
            >
              Price
            </Text>
            <View style={styles.flexRow}>
              <Text style={{ color: "#007FFF", fontSize: 16, fontWeight: 800 }}>
                $30
              </Text>
              <Text style={{ color: "#666", fontSize: 16, fontWeight: 800 }}>
                /hr
              </Text>
            </View>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("book-now-screen")}
            activeOpacity={0.4}
          >
            {isLoading ? (
              <View style={styles.horizontal}>
                <ActivityIndicator />
              </View>
            ) : (
              <Text style={styles.buttonText}>Book Now</Text>
            )}
          </Pressable>
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
  primaryHeader: {
    color: "#c8c6c4",
    fontSize: 16,
    marginTop: 50,
  },
  nav: {
    alignItems: "center",
    justifyContent: "space-between",
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
  carbackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#c8c6c4",
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  activeTab: {
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: "#007FFF",
  },
  button: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#007FFF",
    padding: 15,
    color: "#ffffff",
    borderRadius: 40,
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
    padding: 20,
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
  boxshadowProps: {
    borderWidth: 0.5,
    borderRadius: 25,
    borderTopWidth: 5,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 5,
    borderTopColor: "#007FFF",
    borderLeftColor: "#007FFF",
  },
});
