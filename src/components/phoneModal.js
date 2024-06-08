import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
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

export default function PhoneModal({ openPhone, setOpenPhone }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  async function updatePhone() {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "patch",
        url: `${process.env.DEV_API_URL}/users/change-user-phone`,
        data: { phone: phone },
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      if (!response) throw new Error("response not found");
      setOpenPhone(false);
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
        visible={openPhone}
        onRequestClose={() => setOpenPhone(false)}
        presentationStyle="pageSheet"
      >
        <View style={styles.centeredView}>
          <View style={styles.headerFlexText}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                onPress={() => setOpenPhone(false)}
                name="chevron-left"
                size={24}
                color="#888"
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Phone</Text>
          </View>
          <Text
            style={{
              fontSize: 17,
              color: "#ffffff",
              padding: 15,
              marginTop: 10,
            }}
          >
            Phone Number
          </Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhone(text)}
              value={phone}
              inputMode="text"
              placeholder={phone}
            />
          </View>
          <Pressable style={styles.button} onPress={updatePhone}>
            {isLoading ? (
              <View style={styles.horizontal}>
                <ActivityIndicator />
              </View>
            ) : (
              <Text style={styles.buttonText}>Confirm</Text>
            )}
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#000",
  },

  headerFlexText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 100,
    padding: 10,
    paddingBottom: 20,
    borderBottomWidth: 0.2,
    borderColor: "gray",
    backgroundColor: "#0a100d",
  },
  headerCardFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
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

  helpText: {
    fontSize: 18,
    color: "#ffffff",
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
