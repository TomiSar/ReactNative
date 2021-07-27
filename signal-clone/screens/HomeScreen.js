import React, { useState, useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { auth, db } from '../firebase';

//HotKey rnefs => React Native functional export with Stylesheet
const HomeScreen = ({ navigation }) => {
    // const [chats, setChats] = useState([]);
    // const [loading, setLoading] = useState(false);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login');
        });
    };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: { backgroundColor: '#2C6EBD' },
      headerTitleStyle: { fontSize: 20, fontWeight: 'bold', color: 'white' },
      headerTintColor: 'white',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.6} onPress={signOutUser} >
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
       <View style={{
           flexDirection: 'row',
           justifyContent: 'space-between',
           width: 70,
           marginRight: 20,
       }}>
           <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("AddChat")}>
               <AntDesign name="camerao" size={24} color="white" />
           </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
                <SimpleLineIcons name="pencil" size={24} color="white"/>
            </TouchableOpacity>
       </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      height: "100%",
    },
  });
