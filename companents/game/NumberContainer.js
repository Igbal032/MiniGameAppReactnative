import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    borderWidth: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.accent500
  },
  numberText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.accent500,
  },
});
