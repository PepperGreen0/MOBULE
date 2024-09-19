import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

export default function ContactScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://172.21.12.212/mobileapp/search.php?user_id=${searchTerm}`)
      .then((response) => response.json())
      .then((json) => {
        console.log('Search Results:', json);
        setResults(json);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter User ID"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>ID: {item.id}</Text>
            <Text>User ID: {item.user_id}</Text>
            <Text>User Name: {item.user_name}</Text>
            <Text>Password: {item.passwd}</Text>
          </View>
        )}
      />
    </View>
  );
}
