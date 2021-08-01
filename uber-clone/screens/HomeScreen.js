import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

// HotKey rnefs => React Native functional export with Stylesheet
const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image style={{
                    width: 100, height: 100, resizeMode: 'contain'
                }}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
                }}/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
});