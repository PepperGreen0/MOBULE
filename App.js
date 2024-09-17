/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PP you know</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

/*mport React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, TextInput, Text, View, Button} from 'react-native';
import {}

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"/>
        <View style={styles.container}>
          <Text>Open up App.js to start working on you</Text>
         <StatusBar styles="auto" /> 
        </View>
        <Button
        title="Press me"
      />
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10
    },
  input: {
    height: 60,
    margin: 50,
     borderWidth: 3,
    padding: 10,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default TextInputExample;
*/
/* App.js */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import JsonScreen from './components/JsonScreen';
import ClockScreen from './components/ClockScreen';
import insertDataScreen from './components/insertDataScreen';
import PostDataScreen from './components/PostDataScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                />
                <Stack.Screen
                    name="Contact"
                    component={ContactScreen}
                />
                <Stack.Screen
                    name="JsonS"
                    component={JsonScreen}
                />
                <Stack.Screen
                    name="Post"
                    component={PostDataScreen}
                />
                <Stack.Screen
                    name="insert"
                    component={insertDataScreen}
                />
                <Stack.Screen
                    name="Clock"
                    component={ClockScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}