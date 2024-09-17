import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function ContactScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Contact Screen</Text>

          <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
          />
          <Text>=================================</Text>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
          />
          
        </View>
      );
}