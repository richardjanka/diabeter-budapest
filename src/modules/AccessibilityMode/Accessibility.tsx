import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures'
import GlucoseManager from "./components/GlucoseManager/GlucoseManager";
import styles from "./AccessiblityStyles";
import {swipeDirections} from "../../shared/enums";
import {Text} from 'react-native-ui-kitten'
import logo from '../../../assets/images/logo.png';
import colors from "../../shared/colors";
import {Ionicons} from "@expo/vector-icons";

const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 200,
    gestureIsClickThreshold: 2
};

interface State {
    swiped: swipeDirections | null
}

class Accessibility extends Component<any, State> {
    state = {
        swiped: null
    };

    static navigationOptions = {
        header: null
    };


    onSwipe = (gestureName) => {
        this.setState({swiped: gestureName})
    };



    render() {
        const {swiped} = this.state;

        const baseView = (
            <>
                <View style={styles.sides}>
                    <TouchableOpacity style={styles.corner} onPress={() => this.onSwipe(swipeDirections.SWIPE_LEFT)}>
                        <Ionicons name="ios-arrow-dropleft" size={40} color="black" />
                        <Text category="h3" style={styles.cornerText}>FOOD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.corner} onPress={() => this.onSwipe(swipeDirections.SWIPE_RIGHT)}>
                        <Text category="h3" style={styles.cornerText}>DIARY</Text>
                        <Ionicons name="ios-arrow-dropright" size={40} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.middle}>
                    <View>
                        <Image source={logo} style={{width: 150, height: 120}}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.up} onPress={() => this.onSwipe(swipeDirections.SWIPE_UP)}>
                    <Ionicons name="ios-arrow-dropup" size={40} color="black" />
                    <Text category="h3" style={styles.cornerText}>DIARY</Text>
                </TouchableOpacity>
            </>
        );

        const createView = (swiped) => {
            switch(swiped) {
                case swipeDirections.SWIPE_UP:
                    return <GlucoseManager showBase={() => this.setState({swiped: null})}/>;
                default:
                    return <GlucoseManager showBase={() => this.setState({swiped: null})}/>;
            }
        };

        return swiped ? createView(swiped) : (
            <GestureRecognizer
                onSwipe={this.onSwipe}
                config={config}
                style={{
                    flex: 1,
                }}
            >
                <View style={styles.container}>
                    {baseView}
                </View>
            </GestureRecognizer>
        )
    }
}



export default Accessibility;
