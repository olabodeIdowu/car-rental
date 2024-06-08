import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function EmailModal({ openEmail, setOpenEmail }) {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={openEmail}
        onRequestClose={() => setOpenEmail(false)}
        presentationStyle="pageSheet"
      >
        <View style={styles.centeredView}>
          <View style={styles.headerFlexText}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                onPress={() => setOpenEmail(false)}
                name="chevron-left"
                size={24}
                color="#888"
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Account</Text>
          </View>
          <Text style={{ fontSize: 17, color: "#ffffff", padding: 10 }}>
            Email
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: "grey",
              borderTopWidth: 0.2,
              borderBottomWidth: 0.2,
              padding: 15,
              marginBottom: 15,
              backgroundColor: "#0a100d",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#ffffff",
              }}
            >
              admin@example.com
            </Text>
            <View>
              <MaterialCommunityIcons name="check" size={24} color="#004ba8" />
            </View>
          </Pressable>

          <Text style={{ fontSize: 18, color: "#279af1", padding: 15 }}>
            Verified Email Address
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              gap: 80,
              padding: 15,
              borderWidth: 0.3,
              borderColor: "gray",
              backgroundColor: "#004ba8",
              borderRadius: 50,
            }}
          >
            <MaterialCommunityIcons name="google" size={24} color="#888" />
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: "#ffffff",
              padding: 15,
              paddingBottom: 10,
              //   borderBottomWidth: 0.2,
            }}
          >
            Verify instantly by connecting your Google Account
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              padding: 15,
            }}
          >
            <TouchableOpacity onPress={() => setChecked(!checked)}>
              {checked ? (
                <MaterialCommunityIcons
                  color="#ffffff"
                  name="checkbox-marked"
                  size={24}
                />
              ) : (
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={24}
                  color="#ffffff"
                />
              )}
            </TouchableOpacity>

            <Text style={{ color: "#888", fontSize: 17 }}>
              I would like to receive emails about promotions and marketing
              campaigns
            </Text>
          </View>
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
});
