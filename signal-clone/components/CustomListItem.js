import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: 'https://censur.es/wp-content/uploads/2019/03/default-avatar.png',
        }}
        style={styles.image}
      />
      <ListItem.Content>
          <ListItem.Title style={{ fontSize: 16, fontWeight: "bold" }} >
              Youtube Chat
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14}} >
              This is a test subtitle
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
