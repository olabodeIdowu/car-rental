import axios from "axios";
import { useContext, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../context/authContext";

export default function GenderModal({ openGender, setOpenGender }) {
  const { auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showGender, setShowGender] = useState(true);
  const [selectBoxActive, setSelectBoxActive] = useState("");

  const { user } = auth;

  async function updateGender() {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "patch",
        url: `${process.env.DEV_API_URL}/users/${user?.id}`,
        data: { gender: selectBoxActive },
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      if (!response) throw new Error("response not found");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openGender}
      onRequestClose={() => setOpenGender(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerFlexText}>
            <Text style={styles.headerText}>Gender</Text>
            <TouchableOpacity
              onPress={() => {
                updateGender();
                setOpenGender(false);
              }}
              style={styles.closeModal}
            >
              <Text style={styles.closeModalText}>Done</Text>
            </TouchableOpacity>
          </View>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "grey",
              borderTopWidth: 0.2,
              padding: 15,
              backgroundColor: "#0a100d",
            }}
            onPress={() => setSelectBoxActive("Man")}
          >
            <Text
              style={
                selectBoxActive === "Man"
                  ? { color: "#F8B930", fontSize: 20 }
                  : { color: "#ffffff", fontSize: 20 }
              }
            >
              Man
            </Text>
            <View>
              {selectBoxActive === "Man" && (
                <MaterialCommunityIcons
                  name="check"
                  size={24}
                  color="#F8B930"
                />
              )}
            </View>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "grey",
              borderTopWidth: 0.2,
              padding: 15,
              backgroundColor: "#0a100d",
            }}
            onPress={() => setSelectBoxActive("Woman")}
          >
            <Text
              style={
                selectBoxActive === "Woman"
                  ? { color: "#F8B930", fontSize: 20 }
                  : { color: "#ffffff", fontSize: 20 }
              }
            >
              Woman
            </Text>
            <View>
              {selectBoxActive === "Woman" && (
                <MaterialCommunityIcons
                  name="check"
                  size={24}
                  color="#F8B930"
                />
              )}
            </View>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "grey",
              borderTopWidth: 0.2,
              borderBottomWidth: 0.2,
              padding: 10,
              backgroundColor: "#0a100d",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 18,
                }}
              >
                Show my gender on my profile
              </Text>
            </View>
            <TouchableOpacity onPress={() => setShowGender(!showGender)}>
              {showGender ? (
                <MaterialCommunityIcons
                  name="toggle-switch"
                  size={52}
                  color="#F8B930"
                />
              ) : (
                <MaterialCommunityIcons
                  name="toggle-switch-off"
                  size={52}
                  color="#ffffff"
                />
              )}
            </TouchableOpacity>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    marginTop: "10%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    backgroundColor: "#0a100d",
  },
  modalView: {
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

  headerFlexText: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 100,
    padding: 15,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderColor: "gray",
    backgroundColor: "#0a100d",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffffff",
  },

  closeModalText: {
    fontSize: 20,
    color: "#007FFF",
  },
});
