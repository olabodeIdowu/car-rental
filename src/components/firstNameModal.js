import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useContext, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context/authContext";

export default function FirstNameModal({ openFirstName, setOpenFirstName }) {
  const navigation = useNavigation();
  const { auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");

  const { user } = auth;

  async function updateFirstName() {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "patch",
        url: `${process.env.DEV_API_URL}/users/${user?.id}`,
        data: { firstName: firstName },
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      if (!response) throw new Error("response not found");
      setOpenFirstName(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
  }

  return (
    <View>
      <Modal
        animationType="slide"
        visible={openFirstName}
        onRequestClose={() => setOpenFirstName(false)}
        presentationStyle="pageSheet"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerFlexText}>
              <Text style={styles.headerText}>First Name</Text>
              <TouchableOpacity
                onPress={() => setOpenFirstName(false)}
                style={styles.closeModal}
              >
                <Text style={styles.closeModalText}>Done</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
                inputMode="text"
                placeholder={firstName}
              />
            </View>

            <Pressable style={styles.button} onPress={updateFirstName}>
              {isLoading ? (
                <View style={styles.horizontal}>
                  <ActivityIndicator />
                </View>
              ) : (
                <Text style={styles.buttonText}>Confirm</Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
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
  input: {
    borderColor: "grey",
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#0a100d",
    color: "#ffffff",
    fontSize: 18,
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
});
