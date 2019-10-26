import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import {RecordEnums} from "./enums";
import Record from "./modules/Record";
import styles from "./DiaryStyles";
import data from './data'
import Container from "../../shared/components/Container/Container";

interface State {
    type: RecordEnums,
    value: any,
    name: string,
    time: number
}

class Diary extends Component<State>{

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container>
                <Text style={styles.header}>Diary</Text>
                <ScrollView>
                    {data.map((el, index) => {
                        return <Record key={index} record={el}/>
                    })}
                </ScrollView>
            </Container>
        )
    }
}
export default Diary;
