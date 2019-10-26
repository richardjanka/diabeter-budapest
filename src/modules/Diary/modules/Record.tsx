import React from "react";
import styles from '../DiaryStyles'
import {View, Text} from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createIconSet } from '@expo/vector-icons';

import  Container  from '../../../shared/components/Container/Container'
import moment from "moment";

const Record = (props) => {

    const returnRecord = (el) => {
        switch (el.type) {
            case 'FOOD' :
                return <Container>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <MaterialCommunityIcons name="food-apple" size={64} color="green" />
                            <View style={styles.column}>
                                <Text style={styles.name}>{el.name}</Text>
                                <Text style={styles.description}>{el.value}g</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.description}>{moment(new Date(el.timestamp)).format('HH:mm')}</Text>
                        </View>
                    </View>
                </Container>;
            case 'GLUCOSE' :
                return <Container>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Ionicons name="md-checkmark-circle" size={64} color="green" />
                            <View style={styles.column}>
                                <Text style={styles.name}>{el.name}</Text>
                                <Text style={styles.description}>{el.value} mg/l</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.description}>{moment(new Date(el.timestamp)).format('HH:mm')}</Text>
                        </View>
                    </View>
                </Container>;
            case 'INSULIN' :
                return <Container>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <Ionicons name="md-checkmark-circle" size={64} color="green" />
                            <View style={styles.column}>
                                <Text style={styles.name}>{el.name}</Text>
                                <Text style={styles.description}>{el.value}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.description}>{moment(new Date(el.timestamp)).format('HH:mm')}</Text>
                        </View>
                    </View>
                </Container>;
            default:
                break;
        }
    };

    return (
        <View>
            {returnRecord(props.record)}
        </View>
    );
};


export default Record;
