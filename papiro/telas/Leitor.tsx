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
      { backgroundColor: darkMode ? "#121212" : "#FAEFE7" }
    ]}>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={24} color={darkMode ? "#fff" : "#5A3A2B"} />
      </TouchableOpacity>

      {/* Configurações */}
      <TouchableOpacity 
        style={styles.settings}
        onPress={() => setShowMenu(!showMenu)}
      >
        <Ionicons name="settings-outline" size={24} color={darkMode ? "#fff" : "#5A3A2B"} />
      </TouchableOpacity>

      {/* Audio */}
      <TouchableOpacity style={styles.audio}
      onPress={falarTexto}
      onLongPress={pararAudio} //segura para parar
      >
        <Ionicons name={isSpeaking ? "pause" : "volume-high-outline"} size={24} color={darkMode ? "#fff" : "#5A3A2B"} />
      </TouchableOpacity>

      {/* Painel */}
      {showMenu && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setFontSize(14)}>
            <Text style={styles.menuText}>A-</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFontSize(18)}>
            <Text style={styles.menuText}>A+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
            <Text style={styles.menuText}>
              {darkMode ? "Modo Claro ☀️" : "Modo Escuro 🌙"}
            </Text>
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
          { color: darkMode ? "#fff" : "#5A3A2B" }
        ]}>
          {livro.title}
        </Text>

        <Text style={[
          styles.chapter,
          { color: darkMode ? "#ccc" : "#A67C52" }
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
                  color: darkMode ? "#F5F5F5" : "#333",
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
            { color: darkMode ? "#ccc" : "#5A3A2B" }
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
    top: 50,
    left: 20,
    zIndex: 10,
  },

  settings: {
    position: "absolute",
    top: 50,
    right: 60,
    zIndex: 10,
  },

  audio: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },

  menu: {
    position: "absolute",
    top: 90,
    right: 20,
    backgroundColor: "#2A9D8F",
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },

  menuText: {
    color: "#fff",
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
    color: "#fff",
    fontSize: 16,
    fontFamily: "Merriweather_700Bold",
  },
});