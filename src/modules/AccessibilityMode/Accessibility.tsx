import React, {Component} from 'react';
import {View, Text} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures'
import GlucoseManager from "./components/GlucoseManager/GlucoseManager";
import styles from "./AccessiblityStyles";
import {swipeDirections} from "../../shared/enums";

const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 200,
    gestureIsClickThreshold: 2
};

interface State {
    swiped: swipeDirections | null
}

class Accessibility extends Component<any, State> {
    static navigationOptions = {
        header: null
    };

    state = {
        swiped: null
    };

    onSwipe = (gestureName) => {
        console.log(gestureName);
        this.setState({swiped: gestureName})
    };


    render() {
        const {swiped} = this.state;

        const baseView = (
            <>
                <View>
                    <Text>Swipe up</Text>
                </View>
                <View style={styles.logo}>
                    <View>
                        <Text>Swipe left</Text>
                    </View>
                    <Text>Logo</Text>
                    <View>
                        <Text>Swipe right</Text>
                    </View>
                </View>
                <View>
                    <Text>Swipe up</Text>
                </View>
            </>
        );

        const createView = (swiped) => {
            switch(swiped) {
                case swipeDirections.SWIPE_UP:
                    return <GlucoseManager showBase={() => this.setState({swiped: null})}/>;
                default:
                    return null;
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
