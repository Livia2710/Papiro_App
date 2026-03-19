import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

// data
import { livros } from "../data/livros";

export default function Biblioteca() {
  

  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [aba, setAba] = useState<"recentes" | "favoritos">("recentes");

  // alternar favorito
  function toggleFavorito(id: string) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(fav => fav !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  // lista exibida
  const lista = aba === "favoritos"
    ? livros.filter((l) => l && favoritos.includes(l.id))
    : livros;

  return (
    <ScrollView style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>Minha Biblioteca</Text>

      {/* Abas */}
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, aba === "recentes" && styles.activeTab]}
          onPress={() => setAba("recentes")}
        >
          <Text style={styles.tabText}>Recentes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tab, aba === "favoritos" && styles.activeTab]}
          onPress={() => setAba("favoritos")}
        >
          <Text style={styles.tabText}>Favoritos</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <View style={styles.list}>
        {lista.map((livro) => (
          <View key={livro.id} style={styles.item}>

            {/* Capa */}
            <Image source={livro.image} style={styles.image} />

            {/* Infos */}
            <View style={styles.info}>
              <Text style={styles.bookTitle}>{livro.title}</Text>
              <Text style={styles.author}>{livro.author}</Text>
              <Text style={styles.rating}>⭐ {livro.rating}</Text>
            </View>

            {/* ❤️ Favorito */}
            <TouchableOpacity onPress={() => toggleFavorito(livro.id)}>
              <Ionicons
                name={favoritos.includes(livro.id) ? "heart" : "heart-outline"}
                size={24}
                color={favoritos.includes(livro.id) ? "#8B4513" : "#5A3A2B"}
              />
            </TouchableOpacity>

          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E2D2",
    padding: 15,
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
    backgroundColor: "#EAD8C0",
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: "#2A9D8F",
  },

  tabText: {
    color: "#5A3A2B",
  },

  list: {
    backgroundColor: "#FAEFE7",
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
});