import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../companents/PrimaryButton";

function StartGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 10,
        elevation: 5,
        // shadowColor:'black',
        // shadowOffset:{width: 0, height: 20},
        // shadowRadius: 8,
        // shadowOpacity: 1
    },
    numberInput:{
        color:"yellow",
        height: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderColor:'yellow',
        marginVertical: 5,
        fontWeight:'bold'
    }
});