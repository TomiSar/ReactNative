import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new chat',
      headerBackTitle: 'Chats',
      headerStyle: { backgroundColor: '#2C6EBD' },
      headerTitleStyle: { fontSize: 20, fontWeight: 'bold', color: 'white' },
      headerTintColor: 'white',
    });
  }, [navigation]);

  const createChat = async () => {
    await db.collection('chats').add({
        chatName: input, 
    }).then(() => {
        navigation.goBack();
    }).catch(error => alert(error));
  }; 

  return (
    <View style={styles.container}>
      <Input placeholder="Enter a chat name" value={input} onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat} leftIcon={<Icon name="wechat" type="antdesign" size={24} color="black" /> } />
      <Button disabled={!input} title="Create new Chat" onPress={createChat}/>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      padding: 30,
      height: '100%',
  },
});
