import {Animated, Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageSourcePropType, Dimensions} from "react-native";
import { useCallback, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { carregarConquistas, Conquistas } from "../utils/conquistas";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";


import { livros } from "../data/livros";


const FAVORITOS_KEY = "@papiro:favoritos";
const FOTO_PERFIL_KEY = "@papiro:fotoPerfil";
const AVATAR_PERFIL_KEY = "@papiro:avatarPerfil";
const PROGRESSO_ATUAL = 64;

const {width} = Dimensions.get("window");

const AVATAR_SIZE = 86;
const AVATAR_SPACING = 15;
const AVATAR_ITEM_SIZE = AVATAR_SIZE + AVATAR_SPACING;
const AVATAR_SECRETO: { id: string; image: ImageSourcePropType } = {
  id: "secreto",
  image: require("../assets/avatares/avatarEspecial1.png"),
};

const AVATARES: { id: string; image: ImageSourcePropType }[] = [
  { id: "1",  image: require("../assets/avatares/avatar1.jpg") },
  { id: "2", image: require("../assets/avatares/avatar2.jpg") },
  { id: "3", image: require("../assets/avatares/avatar3.jpg") },
  { id: "4", image: require("../assets/avatares/avatar4.jpg") },

  ];

export default function Perfil() {
  const insets = useSafeAreaInsets();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [avatarSelecionado, setAvatarSelecionado] = useState(AVATARES[0]);

  const [fotoPerfil, setFotoPerfil] = useState<string | null>(null);

  const [livrosAnimados, setLivrosAnimados] = useState(0);
  const [favoritosAnimados, setFavoritosAnimados] = useState(0);
  const [emLeituraAnimados, setEmLeituraAnimados] = useState(0);

  const progressoAnimado = useRef(new Animated.Value(0)).current;

  const totalLivros = livros.length;
  const totalEmLeitura = Math.min(4, totalLivros);

  const[conquistas, setConquistas] = useState<Conquistas>({
    tutorialVideo: false,
    audioLeitor: false,
    comboFinal: false,
  });

  const progressoWidth = progressoAnimado.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", `${PROGRESSO_ATUAL}%`],
  });

  function animarNumero(final: number, onUpdate: (valor: number) => void) {
    const valorAnimado = new Animated.Value(0);

    const listenerId = valorAnimado.addListener(({ value }) => {
      onUpdate(Math.floor(value));
    });

    Animated.timing(valorAnimado, {
      toValue: final,
      duration: 900,
      useNativeDriver: false,
    }).start(() => {
      onUpdate(final);
      valorAnimado.removeListener(listenerId);
    });
  }

  async function carregarDados() {
    const favoritosSalvos = await AsyncStorage.getItem(FAVORITOS_KEY);
    const fotoSalva = await AsyncStorage.getItem(FOTO_PERFIL_KEY);
    const favoritos = favoritosSalvos ? JSON.parse(favoritosSalvos) : [];

    const conquistasSalvas = await carregarConquistas();
    setConquistas(conquistasSalvas);

    const listaAtual = conquistasSalvas.tutorialVideo 
    ? [...AVATARES, AVATAR_SECRETO] : AVATARES;

    const avatarSalvo = await AsyncStorage.getItem(AVATAR_PERFIL_KEY);
    const avatarEncontrado = listaAtual.find(a => a.id === avatarSalvo);

    if(avatarEncontrado){
      setAvatarSelecionado(avatarEncontrado);
    }
  
    setFotoPerfil(fotoSalva);
    setLivrosAnimados(0);
    setFavoritosAnimados(0);
    setEmLeituraAnimados(0);
    progressoAnimado.setValue(0);

    animarNumero(totalLivros, setLivrosAnimados);
    animarNumero(favoritos.length, setFavoritosAnimados);
    animarNumero(totalEmLeitura, setEmLeituraAnimados);

    Animated.timing(progressoAnimado, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  useFocusEffect(
    useCallback(() => {
      carregarDados();
    }, [])
  );

  async function escolherFotoDaGaleria() {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert("Permissão necessária", "Permita o acesso à galeria para escolher uma foto.");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri;
      setFotoPerfil(uri);
      await AsyncStorage.setItem(FOTO_PERFIL_KEY, uri);
    }
  }

  async function tirarFoto() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert("Permissão necessária", "Permita o acesso à câmera para tirar uma foto.");
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri;
      setFotoPerfil(uri);
      await AsyncStorage.setItem(FOTO_PERFIL_KEY, uri);
    }
  }

  function abrirOpcoesDeFoto() {
    Alert.alert("Foto de perfil", "Escolha uma opção", [
      { text: "Tirar foto", onPress: tirarFoto },
      { text: "Escolher da galeria", onPress: escolherFotoDaGaleria },
      { text: "Cancelar", style: "cancel" },
    ]);
  }

  const avataresDisponiveis = conquistas.tutorialVideo
  ? [...AVATARES, AVATAR_SECRETO]
  : AVATARES;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 120 },
        ]}
        showsVerticalScrollIndicator={false}
      >
         <View style={styles.topArea}>
        <View style={styles.avatarCarouselShell} />
        <ImageBackground
          source={require("../assets/couro.png")}
          resizeMode="repeat"
          style={[styles.header, { paddingTop: insets.top + 24 }]}
        >
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerTitle}>Livia</Text>
              <Text style={styles.headerSubtitle}>Leitora de fantasia e clássicos</Text>
            </View>

            <TouchableOpacity style={styles.editButton} onPress={abrirOpcoesDeFoto}>
              <Ionicons name="camera-outline" size={21} color="#F8EDE5" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Animated.FlatList
          data={avataresDisponiveis}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={AVATAR_ITEM_SIZE}
          decelerationRate="fast"
          style={styles.avatarList}
          contentContainerStyle={{
            paddingHorizontal: (width - AVATAR_SIZE) / 2,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          onMomentumScrollEnd={async (event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / AVATAR_ITEM_SIZE);
            const avatar = avataresDisponiveis[index];

            if (avatar) {
              setAvatarSelecionado(avatar);
              setFotoPerfil(null);
              await AsyncStorage.setItem(AVATAR_PERFIL_KEY, avatar.id);
              await AsyncStorage.removeItem(FOTO_PERFIL_KEY);
            }
          }}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * AVATAR_ITEM_SIZE,
              index * AVATAR_ITEM_SIZE,
              (index + 1) * AVATAR_ITEM_SIZE,
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.72, 1.32, 0.72],
              extrapolate: "clamp",
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.45, 1, 0.45],
              extrapolate: "clamp",
            });

            const badgeOpacity = scrollX.interpolate({
              inputRange,
              outputRange: [0, 1, 0],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                style={[
                  styles.avatarOption,
                  {
                    transform: [{ scale }],
                    opacity,
                  },
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={abrirOpcoesDeFoto}
                  style={styles.avatarTouchable}
                >
                  <Image
                    source={fotoPerfil && item.id === avatarSelecionado.id ? { uri: fotoPerfil } : item.image}
                    style={styles.avatarOptionImage}
                  />

                  <Animated.View style={[styles.cameraBadge, { opacity: badgeOpacity }]}>
                    <Ionicons name="camera" size={14} color="#F8EDE5" />
                  </Animated.View>
                </TouchableOpacity>
              </Animated.View>
            );
          }}
        />
      </View>


        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{livrosAnimados}</Text>
            <Text style={styles.statLabel}>Biblioteca</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{favoritosAnimados}</Text>
            <Text style={styles.statLabel}>Favoritos</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{emLeituraAnimados}</Text>
            <Text style={styles.statLabel}>Em leitura</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitleNoMargin}>Leitura atual</Text>
          <Text style={styles.sectionLink}>Ver tudo</Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.bookCover}>
            <Ionicons name="book" size={30} color="#D4A373" />
          </View>

          <View style={styles.progressInfo}>
            <Text style={styles.bookTitle}>O Hobbit</Text>
            <Text style={styles.bookProgress}>Capítulo 1 • {PROGRESSO_ATUAL}% concluído</Text>

            <View style={styles.progressBar}>
              <Animated.View style={[styles.progressFill, { width: progressoWidth }]} />
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Conquistas</Text>

        <View style={styles.achievements}>
          <View style={[styles.achievementCard, !conquistas.tutorialVideo && styles.achievementLocked]}>
            <View style={[styles.achievementIcon, { backgroundColor: conquistas.tutorialVideo ? "#2A9D8F" : "#C8B2A3" }]}>
              <Ionicons name="play-circle-outline" size={22} color="#F8EDE5" />
            </View>
            <Text style={styles.achievementText}>Guia do Papiro</Text>
          </View>

          <View style={[styles.achievementCard, !conquistas.audioLeitor && styles.achievementLocked]}>
            <View style={[styles.achievementIcon, { backgroundColor: conquistas.audioLeitor ? "#D4A373" : "#C8B2A3" }]}>
              <Ionicons name="volume-high-outline" size={22} color={conquistas.audioLeitor ? "#5A3A2B" : "#F8EDE5"} />
            </View>
            <Text style={styles.achievementText}>Voz da Leitura</Text>
          </View>

          <View style={[styles.achievementCard, !conquistas.comboFinal && styles.achievementLocked]}>
            <View style={[styles.achievementIcon, { backgroundColor: conquistas.comboFinal ? "#8B4513" : "#C8B2A3" }]}>
              <Ionicons name="sparkles-outline" size={22} color="#F8EDE5" />
            </View>
            <Text style={styles.achievementText}>Leitora Desperta</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E2D2",
  },

  scroll: {
    flex: 1,
  },

  content: {
    backgroundColor: "#F6E2D2",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 215,
    backgroundColor: "#5A3A2B",
    paddingHorizontal: 48,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    overflow: "hidden",
    zIndex: 2,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop:16,
  },

  headerTitle: {
    fontSize: 24,
    color: "#F8EDE5",
    fontFamily: "Merriweather_700Bold",
  },

  headerSubtitle: {
    marginTop: 6,
    fontSize: 13,
    color: "#D4A373",
    fontFamily: "Lora_400Regular",
  },

  editButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#8B4513",
    alignItems: "center",
    justifyContent: "center",
  },

  topArea: {
    height: 300,
    position: "relative",
    backgroundColor: "#F6E2D2",
    overflow: "visible",
  
  },
  statsCard: {
    marginTop: 24,
    marginHorizontal: 24,
    backgroundColor: "#F8EDE5",
    borderRadius: 14,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#8B4513",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  statItem: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 22,
    color: "#2A9D8F",
    fontFamily: "Merriweather_700Bold",
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: "#8B4513",
    fontFamily: "Lora_400Regular",
  },

  divider: {
    width: 1,
    height: 48,
    backgroundColor: "#E3C4AA",
  },

  sectionHeader: {
    marginTop: 34,
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  },

  sectionTitle: {
    marginTop: 30,
    marginHorizontal: 24,
    fontSize: 19,
    color: "#5A3A2B",
    fontFamily: "Merriweather_700Bold",
  },

  sectionLink: {
    color: "#2A9D8F",
    fontSize: 12,
    fontFamily: "Merriweather_700Bold",
  },

  progressCard: {
    marginTop: 14,
    marginHorizontal: 24,
    backgroundColor: "#F8EDE5",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#8B4513",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  bookCover: {
    width: 62,
    height: 82,
    borderRadius: 8,
    backgroundColor: "#8B4513",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  progressInfo: {
    flex: 1,
  },

  bookTitle: {
    fontSize: 17,
    color: "#5A3A2B",
    fontFamily: "Merriweather_700Bold",
  },

  bookProgress: {
    marginTop: 6,
    fontSize: 12,
    color: "#A67C52",
    fontFamily: "Lora_400Regular",
  },

  progressBar: {
    marginTop: 14,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E3C4AA",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#2A9D8F",
  },

  achievements: {
    marginTop: 14,
    marginHorizontal: 24,
    flexDirection: "row",
    gap: 10,
  },

  achievementCard: {
    position: "relative",
    flex: 1,
    backgroundColor: "#F8EDE5",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#8B4513",
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },

  achievementIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  achievementText: {
    fontSize: 11,
    color: "#5A3A2B",
    textAlign: "center",
    fontFamily: "Merriweather_700Bold",
  },

  achievementLocked: {
  opacity: 0.55,
},

cameraBadge: {
  position: "absolute",
  right: -2,
  bottom: -2,
  width: 32,
  height: 32,
  borderRadius: 16,
  backgroundColor: "#2A9D8F",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 3,
  borderColor: "#F6E2D2",
},

sectionTitleNoMargin: {
  fontSize: 19,
  color: "#5A3A2B",
  fontFamily: "Merriweather_700Bold",
},

avatarOption: {
  width: AVATAR_ITEM_SIZE,
  alignItems: "center",
  justifyContent: "center",
  height: 145,
  
},

avatarOptionImage: {
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  borderRadius: AVATAR_SIZE / 2,
  borderWidth: 3,
  borderColor: "#D4A373",
  backgroundColor: "#F8EDE5",
  
},

avatarCarouselShell: {
  position: "absolute",
  left: -40,
  right: -40,
  bottom: 0,
  height: 210,
  backgroundColor: "#F8EDE5",
  borderBottomLeftRadius: 220,
  borderBottomRightRadius: 220,
  zIndex: 1,
  
},

avatarTouchable: {
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  borderRadius: AVATAR_SIZE / 2,
  
},

avatarList: {
  position: "absolute",
  left: 0,
  right: 0,
  height: 145,
  bottom: 8,
  zIndex: 3,
 
},

});


