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
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function ConversationScreen({ route: { params } }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
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

          <View style={styles.flexRow}>
            <Image
              style={{ width: 30, height: 30, borderRadius: "50%" }}
              source={require("./../../assets/users/user.png")}
            />

            <View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: 700,
                    color: "#f5f5f5",
                    fontSize: 14,
                    marginBottom: 3,
                  }}
                >
                  Jenny Doe
                </Text>
                <MaterialCommunityIcons
                  name="check-decagram"
                  color="#ffffff"
                  size={12}
                />
              </View>
              <Text style={{ fontSize: 12, color: "#fafafa", fontWeight: 400 }}>
                Online
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("goto-chat-settimgs-screen")}
            style={styles.gobackbackground}
            activeOpacity={0.4}
          >
            <MaterialCommunityIcons
              name="dots-vertical"
              color="#666"
              size={26}
            />
          </TouchableOpacity>
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
            <View
              style={[
                styles.flex,
                styles.chatShadowBackground,
                { padding: 15 },
              ]}
            >
              <Text style={{ fontSize: 14, color: "#555", fontWeight: 400 }}>
                Are you sure you are ok with it?
              </Text>
            </View>
            <View style={styles.flexRow}>
              <View styles={styles.flex}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 30, height: 30, borderRadius: "50%" }}
                    source={require("./../../assets/users/user.png")}
                  />
                  <Text
                    style={{
                      fontWeight: 700,
                      color: "#555",
                      fontSize: 16,
                    }}
                  >
                    Jenny Doe
                  </Text>
                </View>

                <Text style={{ fontSize: 16, color: "#444", fontWeight: 400 }}>
                  08:04 pm
                </Text>
              </View>
              {/* <View style={[styles.flex, styles.chatShadowBackground]}>
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
              </View>
              <View style={[styles.flex, styles.chatShadowBackground]}>
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
              </View>
              */}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
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
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
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
    padding: 10,
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
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 14,
    marginBottom: 10,
  },
});
