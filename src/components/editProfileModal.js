import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";
import { useContext, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GenderButton from "./genderButton";
import GenderModal from "./genderModal";
import FirstNameButton from "./firstNameBtn";
import PhoneButton from "./phoneBtn";
import PhoneModal from "./phoneModal";
import FirstNameModal from "./firstNameModal";
import LastNameButton from "./lastNameBtn";
import LastNameModal from "./lastNameModal";
import { AuthContext } from "../context/authContext";
import ImagePicker from "react-native-image-crop-picker";
// import * as ImagePicker from "expo-image-picker";

export default function EditProfileModal({ openEdit, setOpenEdit }) {
  const { auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [editPrev, setEditPrev] = useState("edit");
  const [upload, setUpload] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [openFirstName, setOpenFirstName] = useState(false);
  const [openLastName, setOpenLastName] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);

  const [image, setImage] = useState(null);

  const { user } = auth;

  async function updatePhoto() {
    try {
      console.log(image);
      setIsLoading(true);
      const response = await axios({
        method: "patch",
        url: `${process.env.DEV_API_URL}/users/${user?.id}`,
        data: { photo: image },
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

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 140,
        height: 140,
        cropping: true,
      });
      console.log(image);
      setImage(image);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
  };

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker\hlaunchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  //   setUpload(true);
  //   // console.log(result, image);
  // };

  return (
    <View style={styles.centered_view}>
      <Modal
        visible={openEdit}
        onRequestClose={() => setOpenEdit(false)}
        animationType="slide"
        presentationStyle="pageSheet"
        style={{ flex: 1, backgroundColor: "#1b263b" }}
      >
        <View style={styles.plans_modal}>
          <View style={styles.headerFlexText}>
            <Text style={styles.headerText}>Edit Info</Text>
            <TouchableOpacity
              onPress={() => {
                updatePhoto();
                setOpenEdit(false);
              }}
              style={styles.closeModal}
            >
              <Text style={styles.closeModalText}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.editPreview}>
            <Text
              onPress={() => setEditPrev("edit")}
              style={[
                styles.editText,
                editPrev === "edit" ? { color: "#007FFF" } : { color: "#9999" },
              ]}
            >
              Edit
            </Text>
            <View
              style={{
                borderColor: "#ffffff",
                borderRightWidth: 0.5,
                height: 30,
              }}
            ></View>
            <Text
              onPress={() => setEditPrev("preview")}
              style={[
                styles.previewText,
                editPrev === "preview"
                  ? { color: "#007FFF" }
                  : { color: "#9999" },
              ]}
            >
              Preview
            </Text>
          </View>
          <ScrollView
            style={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.imageContainer}>
              <View style={{ marginLeft: "auto", marginRight: "auto" }}>
                <View style={styles.imageBackground}>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 140,
                        height: 140,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderWidth: 0.2,
                        backgroundColor: "#D9D9D9",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setOpenEdit(true);
                  }}
                  style={styles.ibackground}
                  activeOpacity={0.4}
                >
                  <MaterialCommunityIcons
                    onPress={pickImage}
                    style={styles.camera}
                    name={upload ? "pencil-outline" : "plus"}
                    size={32}
                    color="#007FFF"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <FirstNameButton setOpenFirstName={setOpenFirstName} />
            <LastNameButton setOpenLastName={setOpenLastName} />
            <PhoneButton setOpenPhone={setOpenPhone} />
            <GenderButton setOpenGender={setOpenGender} />
            <GenderModal
              openGender={openGender}
              setOpenGender={setOpenGender}
            />
            <PhoneModal openPhone={openPhone} setOpenPhone={setOpenPhone} />
            <FirstNameModal
              openFirstName={openFirstName}
              setOpenFirstName={setOpenFirstName}
            />
            <LastNameModal
              openLastName={openLastName}
              setOpenLastName={setOpenLastName}
            />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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

  editPreview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 0.2,
    borderColor: "gray",
    backgroundColor: "#0a100d",
  },

  editText: {
    fontSize: 20,
    color: "#9999",
    fontWeight: "bold",
  },

  previewText: {
    fontSize: 20,
    color: "#9999",
    fontWeight: "bold",
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

  centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },

  plans_modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#000",
  },

  imageContainer: {
    position: "relative",
    marginTop: 20,
    marginBottom: 40,
  },

  imageBackground: {
    width: 140,
    height: 140,
    borderWidth: 0.2,
    backgroundColor: "#575a5e",
    borderRadius: "50%",
    marginTop: 20,
    marginBottom: 20,
  },
  ibackground: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 40,
    height: 40,
    borderRadius: "50%",
  },
  camera: {},

  addMedia: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "#007FFF",
    padding: 15,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#222",
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },

  addMediaText: {
    color: "#222",
    fontSize: 20,
  },
});
