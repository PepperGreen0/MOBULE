import React, { useEffect, useState } from 'react'; 
import { FlatList, Text, View, Button, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'; 

export default function JsonScreen({ navigation }) { 
  const [isLoading, setLoading] = useState(true); 
  const [data, setData] = useState([]); 
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => { 
    fetch('http://172.21.12.212/mobileapp/showmobile.php') 
      .then((response) => response.json()) 
      .then((json) => { 
        console.log('Data received:', json); 
        setData(json); 
      }) 
      .catch((error) => console.error('Error:', error)) 
      .finally(() => setLoading(false)); 
  }, []); 

  const handleEdit = (item) => {
    // นำทางไปที่หน้าแก้ไข พร้อมส่งข้อมูลของรายการนั้นไปด้วย
    navigation.navigate('About', { item });
  };

  const handleDelete = (user_id) => {
    console.log('Deleting user_id:', user_id); // ตรวจสอบค่า user_id ก่อน
    fetch(`http://172.21.12.212/mobileapp/dropdb.php?id=${encodeURIComponent(user_id)}`, {
      method: 'GET', 
    })
      .then((response) => response.text())
      .then((responseText) => {
        console.log('Response Text:', responseText);
        if (responseText.includes('Record deleted successfully')) {
          setData((prevData) => prevData.filter((item) => item.user_id !== user_id));
          Alert.alert('Success', 'Record deleted successfully');
        } else {
          Alert.alert('Error', responseText); 
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred');
      });
  };
  
  

  const toggleOptions = (id) => {
    setSelectedId(selectedId === id ? null : id); 
  };

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
            <TouchableOpacity onPress={() => toggleOptions(item.id)}>
              <Text>ID: {item.id}</Text> 
              <Text>User ID: {item.user_id}</Text> 
              <Text>User Name: {item.user_name}</Text> 
              <Text>Password: {item.passwd}</Text>
            </TouchableOpacity>

            {selectedId === item.id && (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Button title="Edit" onPress={() => handleEdit(item)} />
                <Button title="Delete" onPress={() => handleDelete(item.id)} color="red" />
              </View>
            )}
          </View> 
        )} 
      /> 
    </View> 
  ); 
}
