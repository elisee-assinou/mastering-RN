import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/color";
import { RoundedButton } from "../components/RoundedButton";


export const Focus = () => {

const [subject, setSubject] = useState(null);

    return (

        <View style={styles.container}>
            <View style={styles.inputContainer}>

                <TextInput label="What would you to focus on???" onChangeText={setSubject}></TextInput>
                <RoundedButton  title="+" size={ 50}/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: colors.white,
    },
    inputContainer: {
        flex: 0.5,
        padding: 25,
        justifyContent: "top"
    }

})