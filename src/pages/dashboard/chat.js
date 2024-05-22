import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
  Pressable,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function ChatScreen({ route: { params } }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [newNotification, setNewNotification] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("dashboard-screen");
            }}
            style={styles.gobackbackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons
              name="arrow-left-thin"
              color="#222"
              size={26}
            />
          </TouchableOpacity>

          <Text style={{ color: "#222", fontSize: 18 }}>Chat</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <View
            style={[
              styles.search,
              { backgroundColor: "#ffffff", paddingLeft: 10 },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("search-chat-screen");
              }}
              activeOpacity={0.4}
            >
              <MaterialCommunityIcons name="magnify" color="#666" size={26} />
            </TouchableOpacity>

            <TextInput
              placeholder="Search Rent Partner"
              placeholderTextColor="#555"
              style={styles.searchInput}
            />
          </View>
        </View>
      </View>

      <View style={styles.mainbody}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View>
              <Pressable
                onPress={() => navigation.navigate("goto-conversation-screen")}
                style={[
                  { flexDirection: "row", justifyContent: "space-between" },
                  styles.chatShadowBackground,
                ]}
              >
                <View style={styles.flexRow}>
                  <Image
                    style={{ width: 50, height: 50, borderRadius: "50%" }}
                    source={require("./../../../assets/users/user.png")}
                  />

                  <View>
                    <Text
                      style={{ fontWeight: 700, fontSize: 18, marginBottom: 5 }}
                    >
                      Jenny Doe
                    </Text>
                    <Text
                      style={{ fontSize: 14, color: "#555", fontWeight: 400 }}
                    >
                      Perfect, will check it
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 18, color: "#555", fontWeight: 600 }}>
                  09:34 PM
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("goto-conversation-screen")}
                style={[
                  { flexDirection: "row", justifyContent: "space-between" },
                  styles.chatShadowBackground,
                ]}
              >
                <View style={styles.flexRow}>
                  <Image
                    style={{ width: 50, height: 50, borderRadius: "50%" }}
                    source={require("./../../../assets/users/female-user.png")}
                  />

                  <View>
                    <Text
                      style={{ fontWeight: 700, fontSize: 18, marginBottom: 5 }}
                    >
                      Elizabeth Oyelowo
                    </Text>
                    <Text
                      style={{ fontSize: 14, color: "#555", fontWeight: 400 }}
                    >
                      Are you sure you are ok with it?
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 18, color: "#555", fontWeight: 600 }}>
                  09:34 PM
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
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
  nav: {
    alignItems: "center",
    justifyContent: "left",
    gap: 80,
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
  },

  backText: {
    fontSize: 22,
    color: "#222",
  },
  header: {
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#007FFF",
  },
  mainbody: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  search: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 7,
  },
  searchInput: {
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
  gobackbackground: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },

  chatShadowBackground: {
    borderRadius: 15,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 14,
    padding: 10,
    marginBottom: 10,
  },
});
