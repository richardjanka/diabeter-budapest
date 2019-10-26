import React from 'react';
import {Layout} from "react-native-ui-kitten";
import styles from './ContainerStyles';
import {View} from "react-native";

const Container = ({children}) => {
    return (
        <Layout>
            <View style={styles.container}>
                {children}
            </View>
        </Layout>
    );
};

export default Container;
