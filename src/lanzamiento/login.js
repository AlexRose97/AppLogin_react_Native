import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";
import { Button } from "react-native-paper";

export class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#a8cdff" }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button>Registro</Button>
          <Button onPress={() => this.props.navigation.navigate("HomeApp")}>
            Login
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
