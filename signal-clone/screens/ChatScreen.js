import React, { useState, useLayoutEffect } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

const ChatScreen = ({ navigation, route }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerBackTitleVisbile: false,
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar rounded source={{
              uri: // messages[0]?.data?.photoURL ||
              "https://censur.es/wp-content/uploads/2019/03/default-avatar.png",
          }}/>
          <Text style={{ color: "#ff791e", marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
              {route.params.chatName}
          </Text>
        </View>
      ),
    //   headerLeft: () => (
    //     <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack()}>
    //         <AntDesign name="arrowleft" size={24} color="white" />
    //     </TouchableOpacity>
    //   ),
      headerRight: () => (
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: 80, marginRight: 2 0 }}>
          <TouchableOpacity>
              <FontAwesome name="video-camera" size={24} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Ionicons name="call" size={24} color="white"/>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
