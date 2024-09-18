/* components/Homescreen.js */

import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>=================================</Text>
      <Button
        title="Go to insert"
        onPress={() => navigation.navigate("insert")}
      />
      <Text>=================================</Text>
      <Button 
        title="Go to JsonS"
        onPress={() => navigation.navigate("JsonS")}
      />
      <Text>=================================</Text>
      <Button 
        title="Go to Clock"
        onPress={() => navigation.navigate("Clock")}
      />
      <Text>=================================</Text>
      <Button 
        title="Go to Post"
        onPress={() => navigation.navigate("Post")}
      />
    </View>
    
    
  );
}
