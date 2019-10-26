import React, {Component} from 'react';
import {Text, View} from "react-native";
import styles from "./GlucoseManagerStyles";
import * as Speech from 'expo-speech';

class GlucoseManager extends Component {
    speak = () => {
        const thingToSay = 'Hello World!';
        Speech.speak(thingToSay, {language: 'en'});
    };

    render() {
        return (
            <View style={styles.container}>
               <Text>glucose</Text>
            </View>
        );
    }
}

export default GlucoseManager;
