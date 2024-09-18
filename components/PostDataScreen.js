import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from 'react-native';
export default PostDataScreen = () => {
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
            <Text>User Name</Text>
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
            <Text>====================================================</Text>
            <Button
                title="Insert Data"
                onPress={() => {
                    var datap = new FormData();
                    datap.append("user_id", user_id);
                    datap.append("username", user_name);
                    datap.append("passwd", passwd);
                    fetch('http://192.168.56.1/mobileapp/postdb.php?',{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                    },
                    body: datap,
                }).then(response => response.json())
                  .then(data => console.log(data));

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
