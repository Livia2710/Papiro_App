import { ImageBackground, //Imagem de Fundo
  Text, //Texto
  View, //Tipo uma div
  StyleSheet, //CSS
  Image, //Imagem
  TouchableOpacity, //Botão clicável
  Animated, //Animações
  Dimensions //Pega o tamanho da tela
} from "react-native";

import { 
  useEffect, // Executa algo automauticamente
   useRef //Gurda um valor que não reinicia
  } from "react";

import { useNavigation } from "@react-navigation/native"; //Permite navegar entre telas
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; //Isso é o Typescript ajudando a dizer quais telas existem(tipagem)
import { Ionicons } from "@expo/vector-icons"; //Icones
import { RootStackParamList } from "../App"; //Lista de telas definida no App

const { width } = Dimensions.get("window"); //Pega a dimensão da tela(responsivo)

export default function Inicial() {
  // Essa parte basicamente diz que essa tela é a Inicial(que definimos no App) e ela usa o "mapa"(RootStackParamLista)
  type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Inicial">
  //Aqui ele cria um objeto navigation que use esse "mapa", sabendo para onde ir e o que preciso enviar, por exemplo na página Leitor definimos que precisa de ao meno um livro
  const navigation = useNavigation<NavigationProps>();

  // Animação
  //Começa em 0 e vai controlar o movimento vertical(Y)
  const handY = useRef(new Animated.Value(0)).current;

  //O useEffect garante que roda automaticamente quando a tela abrir
  useEffect(() => {
    Animated.loop( //Em loop(autoexplicativo)
      Animated.sequence([ //Essa é a sequência da animação
        Animated.timing(handY, { //Aqui vai de 0
          toValue:15, //para 15
          duration: 600, // em 600 ms
          useNativeDriver: true, //Faz a animação rodar direto no celular(lado nativo). Importante para fluidez da animação
        }),
        Animated.timing(handY, { //Esse é o oposto, sai do 15
          toValue:0, // E volta para o 0
          duration: 600, // em 600ms
          useNativeDriver: true,
        }),
      ])
    ).start(); //Começa a animação
  }, []); //o [] garante que rode só uma vez, quando a tela abre 

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
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}> {/*Quando pressionado vai para o Login */}
          <View style={styles.triangleShadow}>
          <View
          style={[styles.triangle,
            { //Garante que o triângulo ocupe a largura inteira da tela, indepedente do celular
             borderLeftWidth: width/2, //
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
    flex: 1, //Ocupa toda tela
  },

  top: {
    flex: 4, //Ocupa mais espaço (parte de cima maior)
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8B4513",
  },

  bottom: {
    flex: 2,//Ocupa menos espaço (parte de baixo menor)
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