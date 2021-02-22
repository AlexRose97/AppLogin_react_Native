import React, { Component } from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import { Button } from "react-native-paper";

export class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#b4b4b4" }}>
        <ScrollView>
          <View
            style={{
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri:
                  "https://media.metrolatam.com/2018/02/13/rvds6jj-1200x0.jpg",
              }}
              style={{ width: 120, height: 120, borderRadius: 60 }}
            />
          </View>
          <Button onPress={() => this.props.navigation.navigate("opcion1")}>
            Opcion 1
          </Button>
          <Button onPress={() => this.props.navigation.navigate("opcion2")}>
            Opcion 2
          </Button>
        </ScrollView>
        <Button onPress={() => this.props.navigation.navigate("Login")}>
          Salir
        </Button>
      </SafeAreaView>
    );
  }
}
