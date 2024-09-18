import React, { useEffect, useState } from 'react'; 
import { FlatList, Text, View, ActivityIndicator } from 'react-native'; 
 
export default function JsonScreen({ navigation }) { 
  const [isLoading, setLoading] = useState(true); 
  const [data, setData] = useState([]); 
 
  useEffect(() => { 
    fetch('http://192.168.56.1/mobileapp/showmobile.php') 
      .then((response) => response.json()) 
      .then((json) => { 
        console.log('Data received:', json); // ตรวจสอบข้อมูลที่ได้รับ 
        setData(json); 
      }) 
      .catch((error) => console.error('Error:', error)) 
      .finally(() => setLoading(false)); 
  }, []); 
 
  if (isLoading) { 
    return ( 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        <ActivityIndicator size="large" color="#0000ff" /> 
        <Text>Loading...</Text> 
      </View> 
    ); 
  } 
 
  if (data.length === 0) { 
    return ( 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        <Text>No data available</Text> 
      </View> 
    ); 
  } 
 
  return ( 
    <View style={{ flex: 1, padding: 24 }}> 
      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => ( 
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}> 
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