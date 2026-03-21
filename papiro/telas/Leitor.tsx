import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

// O Audio
import * as Speech from "expo-speech";

export default function Leitor() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { livro } = route.params;

  // Estados corrigidos com tipagem
  const [fontSize, setFontSize] = useState<number>(16);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [isSpeaking, setIsSpeaking] = useState(false);
 
  function falarTexto() {
    Speech.speak(livro.chapter1, {
        language: "pt-BR",
        rate: 0.9, //velocidade
        pitch: 1.0, //tom da voz
        onStart: () => setIsSpeaking(true),
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
    });
  }

  function pararAudio(){
    Speech.stop();
    setIsSpeaking(false);
  }

  return (
    <View style={[
      styles.container,
      { backgroundColor: darkMode ? "#5A3A2B" : "#F8EDE5" }
    ]}>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={24} color={darkMode ? "#F8EDE5" : "#5A3A2B"} />
      </TouchableOpacity>

      {/* Modo Escuro/Claro */}
      <TouchableOpacity 
        style={styles.theme}
        onPress={() => setDarkMode(!darkMode)}
      >
        <Ionicons name={darkMode ? "sunny-outline" : "moon-outline"} size={24} color={darkMode ? "#F8EDE5" : "#5A3A2B"} />
      </TouchableOpacity>

      {/* Configurações */}
      <TouchableOpacity 
        style={styles.settings}
        onPress={() => setShowMenu(!showMenu)}
      >
        <Ionicons name="settings-outline" size={24} color={darkMode ? "#F8EDE5" : "#5A3A2B"} />
      </TouchableOpacity>

      {/* Audio */}
      <TouchableOpacity style={styles.audio}
      onPress={falarTexto}
      onLongPress={pararAudio} //segura para parar
      >
        <Ionicons name={isSpeaking ? "pause" : "volume-high-outline"} size={24} color={darkMode ? "#F8EDE5" : "#5A3A2B"} />
      </TouchableOpacity>

      {/* Painel */}
      {showMenu && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setFontSize(14)}>
            <Text style={styles.menuText}>A-</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFontSize(18)}>
            <Text style={styles.menuText}>A</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFontSize(20)}>
            <Text style={styles.menuText}>A+</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <ScrollView
        style={styles.reader}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[
          styles.title,
          { color: darkMode ? "#F8EDE5" : "#5A3A2B" }
        ]}>
          {livro.title}
        </Text>

        <Text style={[
          styles.chapter,
          { color: darkMode ? "#D4A373" : "#00897B" }
        ]}>
          Capítulo 1
        </Text>

        {/*  TEXTO COM PARÁGRAFOS */}
        {livro.chapter1
          .trim()
          .split("\n\n")
          .map((p: string, index: number) => (
            <Text
              key={index}
              style={[
                styles.text,
                {
                  fontSize: fontSize,
                  lineHeight: fontSize * 1.6,
                  color: darkMode ? "#F8EDE5" : "#5A3A2B",
                }
              ]}
            >
              {p}
            </Text>
        ))}

        {/*  Final */}
        <View style={styles.end}>
          <Text style={[
            styles.endText,
            { color: darkMode ? "#D4A373" : "#5A3A2B" }
          ]}>
            Você chegou ao fim da prévia
          </Text>

          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyText}>
              Comprar para continuar
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
  theme:{
    position: "absolute",
    top: 70,
    right: 100,
    zIndex: 10,
  },

  settings: {
    position: "absolute",
    top: 70,
    right: 60,
    zIndex: 10,
  },

  audio: {
    position: "absolute",
    top: 70,
    right: 20,
    zIndex: 10,
  },

  menu: {
    position: "absolute",
    flexDirection:"row",
    gap:15,
    top: 100,
    right: 30,
    backgroundColor: "#2A9D8F",
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },

  menuText: {
    color: "#F8EDE5",
    marginBottom: 5,
    fontSize: 14,
  },

  reader: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 22,
    marginBottom: 10,
    fontFamily: "Merriweather_700Bold",
  },

  chapter: {
    fontSize: 18,
    marginBottom: 15,
  },

  text: {
    textAlign: "justify",
    marginBottom: 20,
  },

  end: {
    alignItems: "center",
    marginTop: 20,
  },

  endText: {
    fontSize: 14,
    marginBottom: 10,
  },

  buyButton: {
    backgroundColor: "#2A9D8F",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  buyText: {
    color: "#F8EDE5",
    fontSize: 16,
    fontFamily: "Merriweather_700Bold",
  },
});