import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { db } from '../firebase';

const CustomListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages').orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => setChatMessages(snapshot.docs.map((doc) => doc.data())));
    
        return unsubscribe;
      }, []);

  return (
    <ListItem key={id} onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: chatMessages?.[0]?.photoURL || 'https://censur.es/wp-content/uploads/2019/03/default-avatar.png',
        }}
        style={styles.image} />
      <ListItem.Content>
          <ListItem.Title style={{ fontSize: 16, fontWeight: "bold" }} >
              {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14}} >
              {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
          </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 15,
  },
});
