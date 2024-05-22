import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function CreateReviewScreen({
  showCreateReviewModal,
  setShowCreateReviewModal,
}) {
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ratingStars, setRatingStars] = useState([
    { rate: "rate1", active: false },
    { rate: "rate2", active: false },
    { rate: "rate3", active: false },
    { rate: "rate4", active: false },
    { rate: "rate5", active: false },
  ]);
  const navigation = useNavigation();

  function handleRatings(index) {
    setRatingStars((r) => {
      return r.map((rat, i) => {
        return {
          ...rat,
          active: index === i ? !rat.active : rat.active,
        };
      });
    });
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showCreateReviewModal}
        onRequestClose={() => {
          setShowCreateReviewModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ position: "absolute", right: 10, top: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  setShowCreateReviewModal(false);
                }}
                style={styles.closebackground}
                activeOpacity={0.4}
              >
                <MaterialCommunityIcons name="close" color="#222" size={22} />
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 19, padding: 10 }}>Write review</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              {ratingStars.map((icon, i) => {
                return (
                  <TouchableOpacity onPress={() => handleRatings(i)} key={i}>
                    {icon?.active ? (
                      <MaterialCommunityIcons
                        name="star"
                        color="gold"
                        size={26}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="star-outline"
                        color="#222"
                        size={26}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                width: "100%",
                borderWidth: 0.2,
                height: 150,
                marginTop: 15,
                backgroundColor: "#f9f9f9",
                borderRadius: 6,
              }}
            >
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
              >
                <TextInput
                  editable
                  multiline
                  numberOfLines={4}
                  maxLength={350}
                  onChangeText={(text) => setReview(text)}
                  value={review}
                  style={{
                    padding: 10,
                  }}
                />
              </ScrollView>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                setShowCreateReviewModal(false);
              }}
              activeOpacity={0.4}
            >
              {isLoading ? (
                <View style={styles.horizontal}>
                  <ActivityIndicator />
                </View>
              ) : (
                <Text style={styles.buttonText}>post</Text>
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
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
