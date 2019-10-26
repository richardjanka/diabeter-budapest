import React, {Component} from 'react';
import styles from "./GlucoseManagerStyles";
import * as Speech from 'expo-speech';
import GestureRecognizer from "react-native-swipe-gestures";
import {Input, Layout, Text} from "react-native-ui-kitten";
import {TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import colors from "../../../../shared/colors";

const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 200,
    gestureIsClickThreshold: 2
};

interface Props {
    showBase: () => void;
}

class GlucoseManager extends Component<Props> {
    state = {
        value: null
    };


    speak = () => {
        if(this.state.value) {
            const thingToSay = `You entered ${this.state.value} as your glucose level, is it correct?`;
            Speech.speak(thingToSay, {language: 'en', rate: 0.8});
        }
    };

    changeValue = (value: string) => {
        this.setState({value})
    };

    onSwipeDown = () => {
        this.props.showBase()
    };

    render() {
        return (
            <GestureRecognizer
                config={config}
                onSwipeDown={this.onSwipeDown}
                style={{
                    flex: 1,
                }}
            >
                <Layout style={styles.container}>
                    <Text style={styles.levelTitle}>Glucose Level</Text>
                    <Input
                        size='medium'
                        style={styles.input}
                        placeholder='Enter your glucose level'
                        value={this.state.value}
                        onChangeText={this.changeValue}
                    />
                    <View style={styles.speechButtonContainer}>
                        <TouchableOpacity style={styles.button} onPress={this.speak}>
                            <Ionicons name="ios-mic" size={32} color={colors.red} />
                        </TouchableOpacity>
                    </View>
                </Layout>
            </GestureRecognizer>
        );
    }
}

export default GlucoseManager;
