import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../App";

const { width } = Dimensions.get("window");

export default function Inicial() {
  type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Inicial">
  const navigation = useNavigation<NavigationProps>();

  // Animação
  const handY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(handY, {
          toValue:15,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(handY, {
          toValue:0,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

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

        {/* Animação de mãozinha */}
        <Animated.View
          style={{
            position: "absolute",
            top:30,
            left:0,
            right:0,
            alignItems: "center",
            transform: [{ translateY: handY}],
            zIndex:999
          }}
        >
          <Ionicons name="hand-left-outline" size={40} color="#faefe7"/>
        </Animated.View>

        {/* Mudar textura depois ta feio */}
        {/* Triângulo */}
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
          <View style={styles.triangleShadow}>
          <View
          style={[styles.triangle,
            {
             borderLeftWidth: width/2,
             borderRightWidth: width/2
          }
          ]}
        />
        </View>
        </TouchableOpacity>
        

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
    justifyContent: "flex-start",
     backgroundColor: "#00897B",
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
  triangleShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8, // Android
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth:100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#8B4513"
  },

});