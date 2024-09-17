import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from 'react-native';
export default insertDataScreen = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [user_id, onChangeUid] = React.useState('');
    const [user_name, onChangeUname] = React.useState('');
    const [passwd, onChangePwd] = React.useState('');
    const [data, setData] = React.useState('');

    return (
        <SafeAreaView>
            <Text>User Id</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUid}
                value={user_id}
            />
            <Text>User Name kkk</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUname}
                value={user_name}
            />
            <Text>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePwd}
                value={passwd}
            />
            <Text>===============================================</Text>
            <Button
                title="Insert Data"
                onPress={() => {
                    fetch('http://172.21.12.212/mobileapp/insertdb.php?user_id='+ user_id +'&user_name='+user_name + '&passwd='+ passwd)
                        .then((response) => response.json())
                        .then((json) => setData(json))
                        .catch((error) => console.error(error))
                        .finally(() => setLoading(false));
                }}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
