import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export class CustomHeader extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 70,
          backgroundColor: "#5c138e",
        }}
      >
        {this.props.isHome ? (
          <View
            style={{
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Button
              icon="menu"
              color="#fff"
              onPress={() => this.props.navigation.openDrawer()}
            ></Button>
          </View>
        ) : (
          <View
            style={{
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Button
              icon="arrow-left"
              color="#fff"
              onPress={() => this.props.navigation.goBack()}
            ></Button>
          </View>
        )}
        <View
          style={{
            justifyContent: "center",
            flex: 1.5,
          }}
        >
          <Text style={{ textAlign: "center" }}>{this.props.title}</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        ></View>
      </View>
    );
  }
}
