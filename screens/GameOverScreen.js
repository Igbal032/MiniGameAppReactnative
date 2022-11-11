import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../companents/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameover.jpeg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{ 
    flex:1,
    padding: 50,
    justifyContent: 'center',
    alignContent:'center'
  },
  imageContainer: {
    marginTop: 50,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: Colors.primary600,
    borderWidth: 7,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
