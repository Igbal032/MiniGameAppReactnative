import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen.";

export default function App() {
  return (
    <LinearGradient style={styles.rootView} colors={["blue", "red", "green"]}>
      <ImageBackground
        style={styles.rootView}
        resizeMode={"cover"}
        source={require("./assets/images/dices.jpg")}
        imageStyle={styles.backGroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.45,
  },
});
