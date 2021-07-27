import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
          headerBackTitle: "Login",
        });
      }, [navigation]);

    const registerToApp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: profileImage || "https://censur.es/wp-content/uploads/2019/03/default-avatar.png",
            });
        }).catch(error => alert(error));
    };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>Create a Signal account</Text>

      <View style={styles.inputContainer}>
          <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={text => setName(text)}/>
          <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={text => setEmail(text)} />
          <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)}/>
          <Input placeholder="Profile picture URL (optional)" type="" value={profileImage}onChangeText={text => setProfileImage(text)} onSubmitEditing={registerToApp} />
      </View>

      <Button disabled={!name || !email || !password} containerStyle={styles.button} title="Register" onPress={registerToApp}/>
      <Button containerStyle={styles.button} title="Login" type="outline" onPress={() => navigation.navigate("Login")} />
      
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
