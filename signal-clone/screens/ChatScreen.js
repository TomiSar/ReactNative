import React, { useState, useRef, useLayoutEffect } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../firebase';
import * as firebase from 'firebase';

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerBackTitleVisbile: false,
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar
            rounded
            source={{
              // messages[0]?.data?.photoURL ||
              uri: 'https://censur.es/wp-content/uploads/2019/03/default-avatar.png',
            }}
          />
          <Text
            style={{
              color: '#ff791e',
              marginLeft: 5,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 70,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection('chats').doc(route.params.id).collection('messages').add({
      timestamp: firebase.default.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });

    setInput('');
  };

  useLayoutEffect(() => {
    const unsubscribe = db.collection('chats').doc(route.params.id).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot =>
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    return unsubscribe;
  }, [route]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} keyboardVerticalOffset={90}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{ padding: 15 }}>
            { messages.map(({ id, data }) => 
                data.email === auth.currentUser.email ? (
                    <View key={id} style={styles.receiver}>
                        <Avatar rounded position="absolute" containerStyle={{ position: "absolute",  bottom: -5, right: -5}}  
                        bottom={-5} right={-5} size={24} source={{ uri: data.photoURL }} />
                        <Text style={styles.receiverText}>{data.message}</Text>
                    </View>
                ) : (
                    <View key={id} style={styles.sender}>
                        <Avatar rounded position="absolute" containerStyle={{ position: "absolute",  bottom: -5, left: -5}} 
                        bottom={-5} left={-5} size={24} source={{ uri: data.photoURL }} />
                        <Text style={styles.senderText}>{data.message}</Text>
                        <Text style={styles.senderName}>{data.displayName}</Text>
                    </View>
                )
            )}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                placeholder="Signal message"
                value={input}
                onSubmitEditing={sendMessage}
                onChangeText={(text) => setInput(text)}
                style={styles.textInput}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.6}>
                <Ionicons name="send" size={24} color="#2b68e6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: '#ececec',
    padding: 10,
    color: 'gray',
    borderRadius: 30,
  },
  receiver: {
    padding: 15,
    backgroundColor: '#ececec',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative',
  },
  sender: {
    padding: 15,
    backgroundColor: '#2b68e6',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 15,
    maxWidth: '80%',
    position: 'relative',
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 12,
    color: 'white',
  },
  senderText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 15,
  },
  receiverText: {
    color: 'black',
    fontWeight: '500',
    marginLeft: 10,
  }, 
});
