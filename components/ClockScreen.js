import * as React from 'react';
import { Text, View } from 'react-native';

export default function ClockScreen() {
    const [time, setTime] = React.useState();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocalString());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <View>
            <Text>(time)</Text>
        </View>
    );
}
