import React, {Component} from 'react';
import {View, Text} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures'
import GlucoseManager from "./components/GlucoseManager/GlucoseManager";
import styles from "./AccessiblityStyles";

enum swipeDirections {
    SWIPE_UP = 'SWIPE_UP',
    SWIPE_DOWN = 'SWIPE_DOWN',
    SWIPE_LEFT = 'SWIPE_LEFT',
    SWIPE_RIGHT = 'SWIPE_RIGHT'
}


const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
};

interface State {
    backgroundColor: string
}

class Accessibility extends Component<any, State> {
    static navigationOptions = {
        header: null
    };

    state = {
        backgroundColor: '#fff'
    };

    onSwipe = (gestureName) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                this.setState({backgroundColor: 'yellow'});
                break;
        }
    };


    render() {
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

        return (
            <GestureRecognizer
                onSwipe={this.onSwipe}
                config={config}
                style={{
                    flex: 1,
                    backgroundColor: this.state.backgroundColor
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
