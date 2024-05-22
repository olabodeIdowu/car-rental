import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import PageA from "./src/pages/about/pageA";
import PageB from "./src/pages/about/pageB";
import PageC from "./src/pages/about/pageC";
import PageD from "./src/pages/about/pageD";
import PageE from "./src/pages/about/pageE";
import LoginScreen from "./src/auth/login";
import RegisterScreen from "./src/auth/register";
import VerifyOTPScreen from "./src/auth/verifyCode";
import ForgotPasswordScreen from "./src/auth/forgotPassword";
import ResetPasswordScreen from "./src/auth/resetPassword";
import UpdatePasswordScreen from "./src/auth/updatePassword";
import DashboardScreen from "./src/pages/dashboard/dashboard";
import CarBrandListScreen from "./src/pages/cars/carBrandList";
import PopularCarListScreen from "./src/pages/cars/popularCarList";
import SelectCarBrandScreen from "./src/pages/cars/selectCarBrand";
import CarDetailsScreen from "./src/pages/cars/carDetails";
import CreateReviewScreen from "./src/pages/reviews/createReview";
import ExploreScreen from "./src/pages/dashboard/explore";
import BookingReceiptScreen from "./src/pages/bookings/bookingReceipt";
import BookingSummaryScreen from "./src/pages/bookings/bookingSummary";
import BookCarScreen from "./src/pages/bookings/bookCar";
import FavoriteModal from "./src/components/favoriteModal";
import FavoriteScreen from "./src/pages/dashboard/favorite";
import SearchScreen from "./src/components/search";
import FilterScreen from "./src/components/filter";
import MyBookingScreen from "./src/pages/bookings/myBookings";
import ConversationScreen from "./src/components/conversationScreen";
// import Calendar from "./src/components/calendar";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="page-a"
      screenOptions={{
        header: () => null,
      }}
    >
      {/* <Stack.Screen name="calendar" component={Calendar} /> */}
      <Stack.Screen name="page-a" component={PageA} />
      <Stack.Screen name="page-b" component={PageB} />
      <Stack.Screen name="page-c" component={PageC} />
      <Stack.Screen name="page-d" component={PageD} />
      <Stack.Screen name="page-e" component={PageE} />

      <Stack.Screen name="login-screen" component={LoginScreen} />
      <Stack.Screen name="register-screen" component={RegisterScreen} />
      <Stack.Screen name="verify-OTP-screen" component={VerifyOTPScreen} />
      <Stack.Screen
        name="forgot-password-screen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="reset-password-screen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name="update-password-screen"
        component={UpdatePasswordScreen}
      />

      <Stack.Screen name="dashboard-screen" component={DashboardScreen} />
      <Stack.Screen
        name="car-brand-list-screen"
        component={CarBrandListScreen}
      />
      <Stack.Screen
        name="see-popular-car-screen"
        component={PopularCarListScreen}
      />
      <Stack.Screen
        name="select-car-brand-screen"
        component={SelectCarBrandScreen}
      />
      <Stack.Screen name="car-details-screen" component={CarDetailsScreen} />
      <Stack.Screen
        name="write-a-review-screen"
        component={CreateReviewScreen}
      />
      <Stack.Screen name="explore-screen" component={ExploreScreen} />
      <Stack.Screen name="book-now-screen" component={BookCarScreen} />
      <Stack.Screen
        name="booking-summary-screen"
        component={BookingSummaryScreen}
      />
      <Stack.Screen
        name="view-receipt-screen"
        component={BookingReceiptScreen}
      />
      <Stack.Screen name="goto-favorite-screen" component={FavoriteScreen} />
      <Stack.Screen name="open-favorite-modal" component={FavoriteModal} />
      <Stack.Screen name="goto-search-screen" component={SearchScreen} />
      <Stack.Screen name="goto-filter-screen" component={FilterScreen} />
      <Stack.Screen
        name="goto-my-bookings-screen"
        component={MyBookingScreen}
      />
      <Stack.Screen
        name="goto-conversation-screen"
        component={ConversationScreen}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
