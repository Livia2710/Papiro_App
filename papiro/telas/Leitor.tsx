import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect, useRef } from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { salvarConquista } from '../utils/conquistas';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from "expo-speech";

type VozPreferida = {
  label: string;
  identifier: string;
};

export default function Leitor() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const { livro } = route.params; //Pega o livro enviado pela tela Biblioteca

  // Estados corrigidos com tipagem
  const [fontSize, setFontSize] = useState<number>(16);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [voices, setVoices] = useState<VozPreferida[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string | undefined>(undefined);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const parteAtualRef = useRef(0);

  const shouldSpeakRef = useRef(false); 

  const textoLivro = livro.chapter1 ?? "Prévia indisponível para este livro"; 
  const readingMode = isSpeaking || isPaused;

  const theme = {
    background: readingMode
      ? darkMode
        ? "#3F2A22"
        : "#FFF0D8"
      : darkMode
        ? "#5A3A2B"
        : "#F8EDE5",

    text: darkMode ? "#F8EDE5" : "#5A3A2B",

    readerText: readingMode
      ? darkMode
        ? "#FFF7ED"
        : "#7A3E16"
      : darkMode
        ? "#F8EDE5"
        : "#5A3A2B",

    accent: readingMode
      ? "#D4A373"
      : darkMode
        ? "#D4A373"
        : "#00897B",

    panel: darkMode ? "#8B4513" : "#D4A373",
  };

  const VOZES_PREFERIDAS: VozPreferida[] = [
    { label: "Zoe", identifier: "pt-br-x-pte-local" },
    { label: "Edu", identifier: "pt-br-x-ptd-local" }
  ];

  useEffect(() => {
    return () => {
      shouldSpeakRef.current = false;
      Speech.stop();
    };
  }, []);

  // pt-br-x-pte-local <= lembrar essa voz

  useEffect(() => {
  async function carregarVozes() {
    const availableVoices = await Speech.getAvailableVoicesAsync();

    const vozesPreferidas = VOZES_PREFERIDAS.filter((vozPreferida) =>
      availableVoices.some((voice) => voice.identifier === vozPreferida.identifier)
    );

     setVoices(vozesPreferidas);

    if (vozesPreferidas.length > 0) {
      setSelectedVoice(vozesPreferidas[0].identifier);
    }
  }

  carregarVozes();
}, []);

 
  function dividirTexto(texto: string){
    return texto.match(/[\s\S]{1,1000}(?=\s|$)/g) || [];
  }

   async function falarTexto(iniciarDoComeco: boolean = false){
    await salvarConquista("audioLeitor");
    
    shouldSpeakRef.current = true;
    setIsSpeaking(true); 
    setIsPaused(false);

    await Speech.stop(); // Para qualquer fala anterior

    const partes = dividirTexto(textoLivro);

    if(iniciarDoComeco){
      parteAtualRef.current = 0;
    }

    for(let i = parteAtualRef.current; i < partes.length; i++){
      if(!shouldSpeakRef.current) break;

      parteAtualRef.current = i;

      await new Promise<void>((resolve) => {
        Speech.speak(partes[i], {
        language: "pt-BR",
        voice: selectedVoice,
        rate: 0.95, //velocidade
        pitch: 1.0, //tom da voz
        onDone: () => resolve(),
        onStopped: () =>resolve(),
        onError: () => resolve(),
        });
      });
    }

    if(shouldSpeakRef.current){
      parteAtualRef.current = 0;
      setIsPaused(false);
    }

    shouldSpeakRef.current = false;
    setIsSpeaking(false);
  }

  function pararAudio(){
    shouldSpeakRef.current = false;
     Speech.stop();
    setIsSpeaking(false);
  }

  function pausarAudio() {
  shouldSpeakRef.current = false;
  Speech.stop();
  setIsSpeaking(false);
  setIsPaused(true);
  }

  function continuarAudio() {
    falarTexto(false);
  }

  function reiniciarAudio() {
    parteAtualRef.current = 0;
    falarTexto(true);
  }


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      {/* Botão de Voltar */}
      <TouchableOpacity style={[styles.back, {top: insets.top + 20}]} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={24} color={theme.text} />
      </TouchableOpacity>

      {/* Modo Escuro/Claro */}
      <TouchableOpacity style={[styles.theme, {top: insets.top + 20}]} onPress={() => setDarkMode(!darkMode)} >
        <Ionicons name={darkMode ? "sunny-outline" : "moon-outline"} size={24} color={theme.text} />
      </TouchableOpacity>

      {/* Configurações */}
      <TouchableOpacity style={[styles.settings, {top: insets.top + 20}]} onPress={() => setShowMenu(!showMenu)}>
        <Ionicons name="settings-outline" size={24} color={theme.text} />
      </TouchableOpacity>

      {/* Audio */}
      <TouchableOpacity style={[styles.audio, {top: insets.top + 20}]} onPress={isSpeaking ? pausarAudio : isPaused ? continuarAudio : () => falarTexto(true)} onLongPress={reiniciarAudio}>
        <Ionicons name={isSpeaking ? "pause" :  isPaused ? "play" : "volume-high-outline"} size={24} color={theme.text} />
      </TouchableOpacity>

      {/* Painel */}
      {showMenu && (
        <View style={[styles.menu, {top: insets.top + 58, backgroundColor: theme.panel}]}>

          {/* Fonte */}
          <View style={styles.fontRow}>
          <TouchableOpacity style={[styles.fontButton, fontSize === 14 && styles.activeFontButton]} onPress={() => setFontSize(14)}>
            <Text style={styles.fontButtonText}>A-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.fontButton, fontSize === 18 && styles.activeFontButton]} onPress={() => setFontSize(18)}>
             <Text style={styles.fontButtonText}>A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.fontButton, fontSize === 22 && styles.activeFontButton]} onPress={() => setFontSize(22)}>
             <Text style={styles.fontButtonText}>A++</Text>
          </TouchableOpacity>

           </View>

            {voices.length > 0 && (
            <View style={styles.voiceList}>
              {voices.map((voice, index) => (
                <TouchableOpacity
                  key={voice.identifier}
                  style={[
                    styles.voiceButton,
                    selectedVoice === voice.identifier && styles.activeFontButton,
                  ]}
                  onPress={() => setSelectedVoice(voice.identifier)}
                >
                  <Text style={styles.voiceButtonText}>
                    {voice.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      )}

      {/* Conteúdo */}
      <ScrollView
        style={[styles.reader, { backgroundColor: theme.background }]}
        contentContainerStyle={[styles.readerContent, { paddingTop: insets.top + 90, paddingBottom: insets.bottom + 90, }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title,{ color: theme.text }]}>
          {livro.title}
        </Text>

         <Text style={[styles.chapter,{ color: theme.accent }]}>
           Capítulo 1
        </Text>

        {/*  TEXTO COM PARÁGRAFOS */}
        {textoLivro
          .split("\n\n")
          .map((p: string, index: number) => (
            <Text
              key={index}
              style={[
                styles.text,
                {
                  fontSize: fontSize,
                  lineHeight: fontSize * 1.6,
                  color: theme.readerText,
                }
              ]}
            >
              {p}
            </Text>
        ))}

        {/*  Final */}
        <View style={styles.end}>
          <Text style={[styles.endText,{ color: theme.accent }]}>
            Você chegou ao fim da prévia
          </Text>

          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyText}>Comprar para continuar</Text>
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
    left: 20,
    zIndex: 10,
  },
   theme: {
    position: "absolute",
    right: 100,
    zIndex: 10,
  },

  settings: {
    position: "absolute",
    right: 60,
    zIndex: 10,
  },

  fontRow: {
    flexDirection:"row",
    gap: 15,
  },

  fontButton: {
    minWidth: 38,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#8B4513",
    borderRadius: 8,
    alignItems: "center",
  },

  activeFontButton: {
    backgroundColor: "#2a9d8f",
  },

  fontButtonText: {
    color: "#F8EDE5",
    fontSize: 14,
    fontFamily: "Merriweather_700Bold",
  },

  audio: {
    position: "absolute",
    right: 20,
    zIndex: 10,
  },

  menu: {
    position: "absolute",
    right: 20,
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  menuText: {
    color: "#F8EDE5",
    marginBottom: 5,
    fontSize: 14,
    shadowColor: "#8B4513",
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
  },

  reader: {
    flex: 1,
  },

  readerContent: {
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
    fontFamily: "Merriweather_400Regular",
  },

  text: {
    textAlign: "justify",
    marginBottom: 20,
    fontFamily:"Merriweather_400Regular",
  },

  end: {
    alignItems: "center",
    marginTop: 20,
  },

  endText: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "Merriweather_400Regular",
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

  voiceList: {
  marginTop: 10,
  gap: 8,
  },

  voiceButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#8B4513",
  },

  voiceButtonText: {
    color: "#F8EDE5",
    fontSize: 12,
    fontFamily: "Merriweather_400Regular",
  },

});