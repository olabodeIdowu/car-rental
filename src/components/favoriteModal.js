import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FavoriteModal({
  openFavoriteModal,
  setOpenFavoriteModal,
  remove,
  cancel,
}) {
  const [activeTab, setActiveTab] = useState("remove");

  function handleCancel() {
    setActiveTab("cancel");
    cancel();
    setOpenFavoriteModal(false);
  }
  function handleRemove() {
    setActiveTab("remove");
    remove();
    setOpenFavoriteModal(false);
  }

  return (
    <View>
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={openFavoriteModal}
          onRequestClose={() => setOpenFavoriteModal(false)}
        >
          <View style={styles.bottomView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  paddingBottom: 20,
                  fontWeight: 800,
                  borderBottomWidth: 0.2,
                  borderBottomColor: "#f5f5f5",
                }}
              >
                Remove from Favorite?
              </Text>
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
                    source={require("../../assets/cars/suv5.jpg")}
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
                      <MaterialCommunityIcons
                        name="star"
                        color="gold"
                        size={20}
                      />
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
                    <Text
                      style={{ color: "#666", fontSize: 16, fontWeight: 600 }}
                    >
                      /hr
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.flex, { marginBottom: 20, marginTop: 20 }]}>
                <TouchableOpacity
                  style={[
                    styles.pickDriverBtn,
                    activeTab === "cancel" ? styles.activeTab : "",
                  ]}
                  onPress={handleCancel}
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
                    activeTab === "remove" ? styles.activeTab : "",
                  ]}
                  onPress={handleRemove}
                  activeOpacity={0.4}
                >
                  <Text
                    style={{ color: "#6497b1", fontWeight: 700, fontSize: 20 }}
                  >
                    Yes, Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  closebackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#c8c6c4",
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
});
