import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context/authContext";

export default function LastNameButton({ setOpenLastName }) {
  const { auth } = useContext(AuthContext);
  // console.log(auth);
  const { user } = auth;

  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "grey",
          borderTopWidth: 0.2,
          borderBottomWidth: 0.2,
          padding: 15,
          backgroundColor: "#0a100d",
        }}
        onPress={() => setOpenLastName(true)}
      >
        <View>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 18,
            }}
          >
            Last Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 14 }}>
            {user?.lastName}
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#888" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
