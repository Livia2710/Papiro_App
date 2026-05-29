import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { livros } from "../data/livros";

const FAVORITOS_KEY = "@papiro:favoritos";

export default function Biblioteca() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [aba, setAba] = useState<"recentes" | "favoritos">("recentes");

  // alternar favorito
  async function toggleFavorito(id: string) {
    const novosFavoritos = favoritos.includes(id)
    ? favoritos.filter((fav) => fav !== id)
    : [...favoritos, id];
    setFavoritos(novosFavoritos);
    await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(novosFavoritos));
  }

  // lista exibida
  const lista = aba === "favoritos"
    ? livros.filter((l) => l && favoritos.includes(l.id))
    : livros;

  useEffect(()=> {
    async function carregarFavoritos() {
      const favoritosSalvos = await AsyncStorage.getItem(FAVORITOS_KEY);
      if (favoritosSalvos) {
        setFavoritos(JSON.parse(favoritosSalvos));
      }
    }
    carregarFavoritos();
}, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={[styles.content,{ paddingBottom: insets.bottom + 120 }]} showsVerticalScrollIndicator={false}>

      {/* Título */}
      <Text style={styles.title}>Minha Biblioteca</Text>

      {/* Abas */}
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, aba === "recentes" && styles.activeTabContainer]}
          onPress={() => setAba("recentes")}
        >
          <Text style={[styles.tabText, aba === "recentes" && styles.activeTabText]}>Recentes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, aba === "favoritos" && styles.activeTabContainer]}
          onPress={() => setAba("favoritos")}
        >
          <Text style={[styles.tabText, aba === "favoritos" && styles.activeTabText]}>Favoritos</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <View style={styles.list}>
        {lista.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="cafe-outline" size={34} color="#8B4513" />
            <Text style={styles.emptyTitle}>Nenhum favorito ainda</Text>
            <Text style={styles.emptyText}>
              Favorite algum livro para ele aparecer aqui.
            </Text>
          </View>
        ) : (
          lista.map((livro) => (
            <TouchableOpacity key={livro.id} style={styles.item} onPress={() => navigation.navigate("Leitor", { livro })}>
             
              <Image source={livro.image} style={styles.image} />

              <View style={styles.info}>
                <Text style={styles.bookTitle}>{livro.title}</Text>
                <Text style={styles.author}>{livro.author}</Text>
                <Text style={styles.rating}>⭐ {livro.rating}</Text>
              </View>

              <TouchableOpacity onPress={(event) => {
                event.stopPropagation();
                toggleFavorito(livro.id);
              }}>
                <Ionicons
                  name={favoritos.includes(livro.id) ? "cafe" : "cafe-outline"}
                  size={24}
                  color={favoritos.includes(livro.id) ? "#8B4513" : "#5A3A2B"}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6E2D2",
  },

  content: {
    padding: 15,
    paddingTop: 100,
  },

  title: {
    fontSize: 22,
    color: "#5A3A2B",
    marginBottom: 15,
    fontFamily: "Merriweather_700Bold",
  },

  tabs: {
    flexDirection: "row",
    marginBottom: 20,

   
  },

  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#F8EDE5",
    marginRight: 10,

     // sombra
    shadowColor: "#5A3A2B",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  // ADICIONAR:
    activeTabContainer: {
      backgroundColor: "#2A9D8F",
    },
    activeTabText: {
      color: "#F8EDE5",
    },
  tabText: {
    color: "#5A3A2B",
    fontFamily: "Merriweather_700Bold",
  },

  list: {
    backgroundColor: "#F8EDE5",
    borderRadius: 15,
    padding: 10,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  image: {
    width: 60,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },

  info: {
    flex: 1,
  },

  bookTitle: {
    fontSize: 14,
    color: "#5A3A2B",
    fontFamily: "Merriweather_700Bold",
  },

  author: {
    fontSize: 12,
    color: "#888",
  },

  rating: {
    fontSize: 12,
  },

  emptyContainer: {
  alignItems: "center",
  paddingVertical: 30,
  paddingHorizontal: 20,
},

emptyTitle: {
  marginTop: 10,
  fontSize: 16,
  color: "#5A3A2B",
  fontFamily: "Merriweather_700Bold",
},

emptyText: {
  marginTop: 6,
  fontSize: 13,
  color: "#8B4513",
  textAlign: "center",
  fontFamily: "Merriweather_400Regular",
},
});