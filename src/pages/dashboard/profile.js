import React, { useContext, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/authContext";
import EditProfileModal from "../../components/editProfileModal";

export default function ProfileScreen({ route: { params } }) {
  const navigation = useNavigation();
  const { auth } = useContext(AuthContext);
  const [isClosingAccount, setIsClosingAccount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  // console.log(auth);
  const { user } = auth;

  async function logout() {
    try {
      setIsLoading(true);
      await axios({
        method: "post",
        url: `${process.env.DEV_API_URL}/users/logout-user`,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      navigation.navigate("login-screen");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
  }

  async function deleteAccount() {
    try {
      setIsClosingAccount(true);
      await axios({
        method: "patch",
        url: `${process.env.DEV_API_URL}/users/${user?.id}/delete-user`,
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setIsClosingAccount(false);
      navigation.navigate("login-screen");
    } catch (error) {
      setIsClosingAccount(false);
      console.log(error);
      Alert.alert("Error", error.message, [{ text: "OK" }]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.flexColumn}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: "50%",
              }}
              source={user?.photo}
            />

            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text style={{ fontWeight: 700, fontSize: 22 }}>
                {user?.firstName} {user?.lastName}
              </Text>
              <MaterialCommunityIcons
                name="check-decagram"
                color="#ffffff"
                size={12}
              />
              <TouchableOpacity
                onPress={() => {
                  setOpenEdit(true);
                }}
                style={styles.ibackground}
                activeOpacity={0.4}
              >
                <MaterialCommunityIcons name="pen" color="#007FFF" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVericalScrollIndicator={false}
        bounces={true}
        style={styles.mainbody}
      >
        <View style={[styles.flex, { paddingTop: 10, paddingBottom: 10 }]}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Fullname
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            {`${user?.firstName}` + " " + `${user?.lastName}`}
          </Text>
        </View>
        <View style={[styles.flex, { paddingTop: 10, paddingBottom: 10 }]}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Email
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            {user?.email}
          </Text>
        </View>
        <View style={[styles.flex, { paddingTop: 10, paddingBottom: 10 }]}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Gender
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            {user?.gender}
          </Text>
        </View>
        <View style={[styles.flex, { paddingTop: 10, paddingBottom: 10 }]}>
          <Text
            style={{
              color: "#666",
              fontSize: 16,
              paddingTop: 5,
              paddingBottom: 5,
              fontWeight: 400,
            }}
          >
            Phone
          </Text>
          <Text style={{ color: "#444", fontSize: 16, fontWeight: 800 }}>
            (+234) {user?.phone}
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("update-password-screen")}
            activeOpacity={0.4}
            style={[styles.flexRow, { paddingTop: 10, paddingBottom: 10 }]}
          >
            <MaterialCommunityIcons
              name="lock-outline"
              color="#6497b1"
              size={24}
            />
            <Text style={{ color: "#444", fontSize: 18, fontWeight: 800 }}>
              Change Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("update-email-screen")}
            activeOpacity={0.4}
            style={[styles.flexRow, { paddingTop: 10, paddingBottom: 10 }]}
          >
            <MaterialCommunityIcons name="email" color="#6497b1" size={24} />
            <Text style={{ color: "#444", fontSize: 18, fontWeight: 800 }}>
              Change Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate("goto-my-bookings-screen")}
            style={[styles.flexRow, { paddingTop: 10, paddingBottom: 10 }]}
          >
            <MaterialCommunityIcons
              name="book-outline"
              color="#6497b1"
              size={24}
            />
            <Text style={{ color: "#444", fontSize: 18, fontWeight: 800 }}>
              My Bookings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={logout}
            activeOpacity={0.4}
            style={[styles.flexRow, { paddingTop: 10, paddingBottom: 10 }]}
          >
            <MaterialCommunityIcons name="logout" color="#6497b1" size={24} />
            {isLoading ? (
              <View style={styles.horizontal}>
                <ActivityIndicator />
              </View>
            ) : (
              <Text style={{ color: "#444", fontSize: 18, fontWeight: 800 }}>
                Logout
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={deleteAccount}
            activeOpacity={0.4}
            style={[styles.flexRow, { paddingTop: 10, paddingBottom: 10 }]}
          >
            <MaterialCommunityIcons name="delete" color="#6497b1" size={24} />
            {isClosingAccount ? (
              <View style={styles.horizontal}>
                <ActivityIndicator />
              </View>
            ) : (
              <Text style={{ color: "#444", fontSize: 18, fontWeight: 800 }}>
                Close Account
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      {openEdit && (
        <EditProfileModal openEdit={openEdit} setOpenEdit={setOpenEdit} />
      )}
      {/* {openSettings && (
        <SettingsModal
          openSettings={openSettings}
          setOpenSettings={setOpenSettings}
        />
      )} */}
    </SafeAreaView>
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
    alignItems: "center",
    gap: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: "#222",
  },
  flexColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  primaryHeader: {
    color: "#c8c6c4",
    fontSize: 16,
    marginTop: 50,
  },
  header: {
    height: 250,
  },
  container: {
    flex: 1,
    backgroundColor: "#007FFF",
  },
  mainbody: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
  },
  searchInput: {
    width: "75%",
    borderWidth: 0,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 6,
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

  ibackground: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
  buttonText: {
    color: "#222",
    fontSize: 20,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
