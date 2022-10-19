import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../companents/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState(0);
  function onConfirmHandler(input) {
    setEnteredNumber(input);
  }
  function onRestHandler() {
    setEnteredNumber(0);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
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
    backgroundColor: "#4e0329",
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
    color: "yellow",
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 15,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "yellow",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
