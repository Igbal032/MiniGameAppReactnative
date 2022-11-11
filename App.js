import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen.";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }
  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  // if (userNumber) {
  //   screen = <GameScreen onGameOver={gameOverHandler} userNumber={userNumber}/>;
  // }
  // else if(gameIsOver && userNumber){
  //   screen = <GameOverScreen />
  // }
  screen = <GameOverScreen />
  return (
    <LinearGradient style={styles.rootScreen} colors={["blue", "red", "green"]}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode={"cover"}
        source={require("./assets/images/dices.jpg")}
        imageStyle={styles.backGroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.45,
  },
});
