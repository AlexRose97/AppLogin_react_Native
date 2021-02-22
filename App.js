import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native-paper";

import { CustomHeader, CustomDrawerContent } from "./src";
import {
  HomeScreenDetail,
  SettingsScreenDetail,
  SettingsScreen,
  HomeScreen,
} from "./src/tabBar";
import { opcion1, opcion2 } from "./src/tabMenu";
import { Registro, LoginScreen } from "./src/lanzamiento";

const navHead = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navHead} />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navHead}
      />
    </StackHome.Navigator>
  );
}

const StackSettings = createStackNavigator();
function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen
        name="Settings"
        component={SettingsScreen}
        options={navHead}
      />
      <StackSettings.Screen
        name="SettinsgDetail"
        component={SettingsScreenDetail}
        options={navHead}
      />
    </StackSettings.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "toolbox" : "toolbox-outline";
          }

          // You can return any component that you like here!
          return <Button icon={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}
    >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="opcion1" component={opcion1} />
      <Drawer.Screen name="opcion2" component={opcion2} />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navHead}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navHead}
        />
        <StackApp.Screen
          name="Registro"
          component={Registro}
          options={navHead}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
