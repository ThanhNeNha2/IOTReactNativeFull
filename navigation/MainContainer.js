import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import Body from "../components/Body";
import SettingsScreen from "./screens/SettingsScreens";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Contact from "./screens/Contact";
import ForgotPassword from "./screens/ForgotPassword";
//Screen names
const homeName = "Home";
const bodyName = "Feature";
const settingsName = "Settings";
const login = "Login";
const register = "Register";
const contact = "Notification";
const forgotPassword = "ForgotPassword";
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === bodyName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === login) {
              iconName = focused ? "log-in" : "log-in";
            } else if (rn === register) {
              iconName = focused ? "log-in" : "log-in";
            } else if (rn === contact) {
              iconName = focused ? "list" : "list";
            } else if (rn === forgotPassword) {
              iconName = focused ? "log-in" : "log-in";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name={login}
          component={Login}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name={register}
          component={Register}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen name={forgotPassword} component={ForgotPassword} />
        <Tab.Screen name={bodyName} component={Body} />
        <Tab.Screen name={contact} component={Contact} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
