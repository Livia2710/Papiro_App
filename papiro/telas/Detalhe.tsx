import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhe() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { livro } = route.params;

  return (
    <ScrollView style={styles.container}
    contentContainerStyle={{ paddingBottom:60 }}// Para dar um espaçinho embaixo da button Adicionar a Biblioteca
    showsVerticalScrollIndicator={false}>

        {/* Botão para voltar */}
        <TouchableOpacity style={styles.back} 
        onPress={()=> navigation.goBack()}>
            <Ionicons name='arrow-back' size={24} color="#5A3A2B"/>
        </TouchableOpacity>


          {/* Card */}
        <View style={styles.card}>

        {/* Imagem */}
        <Image source={livro.image} style={styles.image} />

      
            <Text style={styles.title}>{livro.title}</Text>
            <Text style={styles.author}>{livro.author}</Text>
            <Text style={styles.rating}>⭐ {livro.rating}</Text>
            <Text style={styles.section}>Descrição</Text>
            <Text style={styles.description}>{livro.description}</Text>

        {/* Botões */}
        <TouchableOpacity style={styles.primaryButton}
        onPress={() => navigation.navigate("Leitor", { livro })}>
            <Text style={styles.primaryText}>Ler agora</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}
        onPress={() => navigation.replace("Menu", { screen: "Biblioteca"})}>
            <Text style={styles.secondaryText}>Adicionar à Biblioteca</Text>
        </TouchableOpacity>

        </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E2D2",
    paddingTop: 50,
    paddingBottom: 40,
  },

  back: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },

  card: {
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 220,
    borderRadius: 10,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  title: {
    fontSize: 22,
    color: "#5A3A2B",
    textAlign: "center",
    fontFamily: "Merriweather_700Bold",
  },

  author: {
    fontSize: 14,
    color: "#A67C52",
    marginBottom: 10,
  },

  rating: {
    fontSize: 14,
    marginBottom: 15,
    color: "#E09F3E",
  },

  section: {
    fontSize: 18,
    color: "#5A3A2B",
    alignSelf: "flex-start",
    marginBottom: 5,
    fontFamily: "Merriweather_700Bold",
  },

  description: {
    fontSize: 14,
    color: "#5A3A2B",
    lineHeight: 20,
    marginBottom: 15,
  },

  primaryButton: {
    backgroundColor: "#2A9D8F",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  primaryText: {
    color: "#F8EDE5",
    fontSize: 16,
    fontFamily: "Merriweather_700Bold",
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: "#8B4513",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },

  secondaryText: {
    color: "#8B4513",
    fontSize: 16,
    fontFamily: "Merriweather_700Bold",
  },
});