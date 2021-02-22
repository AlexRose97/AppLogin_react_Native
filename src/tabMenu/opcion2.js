import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CustomHeader } from "../index";

export class opcion2 extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#a8ffaf" }}>
        <CustomHeader title="Opcion 2" navigation={this.props.navigation} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Opcion 2</Text>
        </View>
      </SafeAreaView>
    );
  }
}
