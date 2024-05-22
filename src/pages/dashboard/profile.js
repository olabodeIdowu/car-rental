import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen({ route: { params } }) {
  const [showLocation, setShowLocation] = useState(false);
  const [newNotification, setNewNotification] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
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
              source={require("./../../../assets/users/user.png")}
            />

            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text style={{ fontWeight: 700, fontSize: 22 }}>Jenny Doe</Text>
              <MaterialCommunityIcons
                name="check-decagram"
                color="#ffffff"
                size={12}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.mainbody}>
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
            Test User
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
            example@user.com
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
            Male
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
            (+234) 906-674-0000
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
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
            activeOpacity={0.4}
            style={[styles.flexRow, { paddingTop: 10, paddingBottom: 10 }]}
          >
            <MaterialCommunityIcons name="logout" color="#6497b1" size={24} />
            <Text style={{ color: "#444", fontSize: 18, fontWeight: 800 }}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  notificationbackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#c8c6c4",
    width: 35,
    height: 35,
    borderRadius: 8,
  },
  sortbackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },

  brandbackground: {
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
});
