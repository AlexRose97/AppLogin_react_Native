import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CustomHeader } from "../index";
import { Button } from "react-native-paper";

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader
          title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Home!</Text>
          <Button onPress={() => this.props.navigation.navigate("HomeDetail")}>
            Go to Home detail
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
