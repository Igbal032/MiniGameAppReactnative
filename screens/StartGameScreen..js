import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../companents/ui/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState(null);

  function onChangeNumber(input) {
    setEnteredNumber(input);
  }

  function onRestHandler() {
    setEnteredNumber(null);
  }

  function onConfirmHandler() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Close", style: "destructive", onPress: onRestHandler }]
      );
      return;
    }
    console.log("Hello");
    onPickNumber(choosenNumber);
    console.log("Hello2");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        onChangeText={onChangeNumber}
        autoCorrect={false}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onRestHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary600,
    borderRadius: 10,
    elevation: 5,
    // shadowColor:'black',
    // shadowOffset:{width: 0, height: 20},
    // shadowRadius: 8,
    // shadowOpacity: 1
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    color: Colors.accent500,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 15,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor:  Colors.accent500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
