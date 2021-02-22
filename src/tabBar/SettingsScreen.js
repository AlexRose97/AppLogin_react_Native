import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CustomHeader } from "../index";
import { Button } from "react-native-paper";

export class SettingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="Settings" isHome={true} navigation={this.props.navigation} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Settings!</Text>
          <Button onPress={() => this.props.navigation.navigate("SettinsgDetail")}>
            Go to Settings detail
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
