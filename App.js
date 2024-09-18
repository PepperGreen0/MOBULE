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