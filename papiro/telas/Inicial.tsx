import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

// Fontes
import { useFonts, Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora';

export default function Inicial() {
  return (
    <View style={styles.container}>

      {/* Parte marrom */}
      <ImageBackground
        source={require("../assets/couro.png")}
        style={styles.top}
        resizeMode="repeat"
      >
        <View style={styles.content}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Papiro</Text>
          <Text style={styles.subtitle}>A biblioteca no seu bolso</Text>
        </View>
      </ImageBackground>

      {/* Parte verde */}
      <ImageBackground
        source={require("../assets/couro.png")}
        style={styles.bottom}
        resizeMode="repeat"
      >
        {/* Mudar textura depois ta feio */}
        {/* Triângulo */}
        <Image
          source={require("../assets/triangulo.png")}
          style={styles.triangle}
          resizeMode="contain"
        />

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  top: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B4513",
  },

  bottom: {
    flex: 2,
    alignItems: "center",
     backgroundColor: "#00897B",
    padding: 0,
    margin:0
  },

  content: {
    alignItems: "center",
  },

  logo: {
    width: 180,
    height: 180,
  },

  title: {
    fontSize: 42,
    color: "#FAEFE7",
    fontFamily: "Merriweather_700Bold",
  },

  subtitle: {
    fontSize: 18,
    color: "#FAEFE7",
    marginTop: 10,
     fontFamily: "Lora_400Regular"
  },

  triangle: {
    width: "100%",
    height: 130,
    padding: 0,
    margin:0
  },

});