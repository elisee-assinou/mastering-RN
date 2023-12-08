import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/color";
import { RoundedButton } from "../components/RoundedButton";
import { fontSizes,spacing } from "../utils/sizes";


export const Focus = ({addSubject}) => {

const [subject, setSubject] = useState(null);

    return (

        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.tip} label="What would you to focus on???" onChangeText={setSubject}></TextInput>
                <View style={styles.button}>

                <RoundedButton  title="+" size={ 50}  onPress={() => addSubject(subject)}/>

                </View>

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
    
        padding: spacing.lg,
        justifyContent: "top",
        flexDirection:"row",
    }, 
    tip:{
       
        flex:1,
        marginRight:10
    },
    button:{
        justifyContent:"center"
    }

})