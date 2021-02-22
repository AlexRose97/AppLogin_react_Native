import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CustomHeader } from "../index";

export class opcion1 extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#a8cdff" }}>
        <CustomHeader title="Opcion 1" navigation={this.props.navigation} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Opcion 1</Text>
        </View>
      </SafeAreaView>
    );
  }
}
