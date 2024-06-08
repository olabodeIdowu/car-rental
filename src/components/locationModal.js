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

export default function LocationModal({ openLocation, setOpenLocation }) {
  return (
    <View>
      <Modal
        animationType="slide"
        visible={openLocation}
        onRequestClose={() => setOpenLocation(false)}
        presentationStyle="pageSheet"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerFlexText}>
              <Text style={styles.headerText}>Location</Text>
              <TouchableOpacity
                onPress={() => setOpenLocation(false)}
                style={styles.closeModal}
              >
                <Text style={styles.closeModalText}>Done</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 17,
                color: "#ffffff",
                padding: 15,
                marginTop: 10,
              }}
            >
              Current Location
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  size={24}
                  color="#3772ff"
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: "#ffffff",
                  }}
                >
                  My Current Location
                </Text>
              </View>
              <MaterialCommunityIcons name="check" size={24} color="#004ba8" />
            </Pressable>
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
    color: "#D9A525",
    fontWeight: "bold",
  },

  helpText: {
    fontSize: 18,
    color: "#ffffff",
  },
});
