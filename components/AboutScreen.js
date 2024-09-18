import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function EditScreen({ route, navigation }) {
  const { item } = route.params;

  const [userId, setUserId] = useState(item.user_id);
  const [userName, setUserName] = useState(item.user_name);
  const [password, setPassword] = useState(item.passwd);

  const handleSave = () => {
    const updatedData = new FormData();
    updatedData.append("id", item.id);
    updatedData.append("user_id", userId);
    updatedData.append("user_name", userName);
    updatedData.append("passwd", password);

    fetch('http://192.168.56.1/mobileapp/updatedb.php', {
      method: 'POST',
      body: updatedData,
    })
      .then((response) => response.text())
      .then((responseText) => {
        console.log('Response Text:', responseText);
        try {
          const responseData = JSON.parse(responseText);
          if (responseData.success) {
            Alert.alert('Success', 'User updated successfully');
            navigation.goBack();
          } else {
            Alert.alert('Error', responseData.message);
          }
        } catch (error) {
          console.error('JSON Parse Error:', error);
          Alert.alert('Error', 'Received invalid JSON from server');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred');
      });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Edit Screen</Text>
      <Text>ID: {item.id}</Text>
      <Text>User ID:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        value={userId}
        onChangeText={setUserId}
      />
      <Text>User Name:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        value={userName}
        onChangeText={setUserName}
      />
      <Text>Password:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
