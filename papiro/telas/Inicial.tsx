import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, Animated, Dimensions, PanResponder } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native"; 
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 
import { Ionicons } from "@expo/vector-icons"; 
import { RootStackParamList } from "../App"; 

// Transforma o ImageBackground comum em uma versão que aceita animações
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const { width } = Dimensions.get("window"); 

// BOA PRÁTICA: Tipagem fica fora do componente para o React não reprocessá-la toda hora
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Inicial">;

export default function Inicial() {
  const navigation = useNavigation<NavigationProps>();

  // CONTROLADORES DE ANIMAÇÃO (REFS)
  // Define o movimento vertical (Y) da mãozinha dando a dica do gesto
  const handY = useRef(new Animated.Value(0)).current;

  // Controla o quanto a tela marrom cresce (de 0 a 1) antes de mudar de tela
  const expandAnim = useRef(new Animated.Value(0)).current;

  // Evita múltiplos cliques ou disparos seguidos do gesto se o usuário ficar arrastando feito louco
  const [isLeaving, setIsLeaving] = useState(false);

  // CONFIGURAÇÃO DO GESTO (PAN RESPONDER)
  const panResponder = useRef(
    PanResponder.create({
      // Ativa o rastreador de dedo apenas se o usuário arrastar para baixo mais do que 12 pixels
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return gestureState.dy > 12;
      },
      // Quando o usuário solta o dedo, se ele arrastou mais de 45 pixels para baixo, aciona a entrada no app
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 45) {
          entrarNoApp();
        }
      },
    })
  ).current;

  // INTERPOLAÇÕES: Convertem o valor de "expandAnim" (0 até 1) em proporções de tamanho de tela (flex)
  const topFlex = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 7], // A parte marrom expande tomando quase a tela toda
  });

  const bottomFlex = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.2], // A parte verde encolhe até quase sumir
  });

  // LOOP DA MÃOZINHA: Roda uma única vez assim que a tela abre
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        // Desce a mãozinha suavemente
        Animated.timing(handY, {
          toValue: 34, 
          duration: 850, 
          useNativeDriver: true, // Executa no lado nativo (Android/iOS) garantindo 60fps sem travar
        }),
        // Sobe a mãozinha de volta para a posição inicial
        Animated.timing(handY, {
          toValue: 0, 
          duration: 600, // Ajustado de acordo com seu comentário original
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // FUNÇÃO DE TRANSIÇÃO DA TELA
  function entrarNoApp() {
    if (isLeaving) return; // Se já iniciou a saída, bloqueia novas tentativas
    setIsLeaving(true);

    // Faz a transição visual crescer a parte de cima (efeito cortina marrom fechando)
    Animated.timing(expandAnim, {
      toValue: 1,
      duration: 650,
      useNativeDriver: false, // "flex" não aceita Native Driver, precisa ser false aqui
    }).start(() => {
      navigation.navigate("Login"); // Muda de tela assim que a animação acaba
    });
  }

  return (
    // FIX CONSERTO: Injetamos o panResponder no container principal. Agora qualquer arrastão na tela funciona!
    <View style={styles.container} {...panResponder.panHandlers}>

      {/* PARTE SUPERIOR (MARROM - COURO) */}
      <AnimatedImageBackground
        source={require("../assets/couro.png")}
        style={[styles.top, { flex: topFlex }]}
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
      </AnimatedImageBackground>

      {/* PARTE INFERIOR (VERDE) */}
      <AnimatedImageBackground
        source={require("../assets/couro.png")}
        style={[styles.bottom, { flex: bottomFlex }]}
        resizeMode="repeat"
      >
    
        {/* ELEMENTO DA MÃOZINHA (Dica Visual) */}
        <Animated.View
          pointerEvents="none" // Evita que a mãozinha "roube" o clique/toque do dedo do usuário
          style={[
            styles.handHint,
            {
              transform: [{ translateY: handY }], // Vincula o movimento vertical à nossa animação
            },
          ]}
        >
          <Ionicons name="hand-left-outline" size={40} color="#FAEFE7" />
          <Ionicons name="arrow-down" size={22} color="#FAEFE7" />
        </Animated.View>

        {/* ÁREA DE TOQUE DO TRIÂNGULO (Caso o usuário prefira clicar em vez de arrastar) */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={entrarNoApp}
          style={styles.triangleTouch}
        >
          <View>
            <View style={[styles.triangleMask, { width }]}>
              <ImageBackground
                source={require("../assets/couro.png")}
                resizeMode="repeat"
                style={styles.triangleTexture}
              />
            </View>
          </View>
        </TouchableOpacity>
        
      </AnimatedImageBackground>

    </View>
  );
}

// ESTILOS (Mantidos iguais aos seus originais)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B4513",
  },
  bottom: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#00897B",
    overflow: "hidden",
  },
  handHint: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 999,
  },
  triangleTouch: {
    width: "100%",
    height: 200,
    alignItems: "center",
  },
  triangleMask: {
    width: "100%",
    height: 350,
    overflow: "hidden",
    alignItems: "center",
  },
  triangleTexture: {
    width: 360,
    height: 360,
    backgroundColor: "#8B4513",
    transform: [{ rotate: "45deg" }],
    marginTop: -150,
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
 
});
