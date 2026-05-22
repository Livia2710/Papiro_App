import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useEventListener } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../App"; 
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from 'react'; 

// data
import { livros } from "../data/livros";
import { categorias } from "../data/categorias";

//utils
import { carregarConquistas, salvarConquista } from '../utils/conquistas';

import AsyncStorage from "@react-native-async-storage/async-storage";

const CONQUISTAS_KEY = "@papiro:conquistas";
const AVATAR_PERFIL_KEY = "@papiro:avatarPerfil";
const CONQUISTAS_VISTAS_KEY = "@papiro:conquistasVistas";


type NavigationProps = NativeStackNavigationProp<RootStackParamList> //Não especifica, pois Home está dentro do Menu

export default function Home() {
 const navigation = useNavigation<NavigationProps>(); 
 const insets = useSafeAreaInsets(); //Pega as bordas do celular (ex: onde tem o notch)

  const [search, setSearch] = useState(""); 
  const [selectedCategory, setselectedCategory] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const player = useVideoPlayer(require("../assets/VideoApp.mp4"), player => {
    player.loop = false;
    player.play();
  });

  useEventListener(player, "playToEnd", async () => {
    await salvarConquista("tutorialVideo");
    player.pause();
    setModalVisible(false);
  });

  useEffect(() => {
    async function verificarTutorial(){
      const conquistas = await carregarConquistas();
      if(!conquistas.tutorialVideo){
        setModalVisible(true);
      }
    }
    verificarTutorial();
  }, []);

  useEffect(() => {
  if (modalVisible) {
    player.currentTime = 0;
    player.play();
  } else {
    player.pause();
  }
}, [modalVisible]);


  // Filtro
  const filtroLivros = livros.filter((livro) => {
    //Se tiver categoria selecionado: só mostra livrso daquela categoria. Se não tiver, mostrar todos(true)
    const PorCategoria = selectedCategory ? livro?.category === selectedCategory : true;
    //trim() => remove espaços
    //toLowerCase() => ignora maiúscula/minúscula
    const texto = search.trim().toLowerCase();
    //Verifica se o texto é parecido com algum  título ou autor
    const PorBusca = livro?.title.toLowerCase().includes(texto) || livro?.author.toLocaleLowerCase().includes(texto);

    //Só filtra se for por categoria ou por busca
    return PorCategoria && PorBusca;
  });

  function fecharModal(){
    player.pause();
    setModalVisible(false);
  }

  async function resetarConquistas() {
  await AsyncStorage.multiRemove([
    CONQUISTAS_KEY,
    AVATAR_PERFIL_KEY,
    CONQUISTAS_VISTAS_KEY,
  ]);

  console.log("Conquistas e avatar secreto resetados");
}

  return (
    <View style={styles.screen}>
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={fecharModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Bem-vinda ao Papiro</Text>
              <Text style={styles.modalSubtitle}>
                Assista ao guia até o final para desbloquear uma conquista.
              </Text>
            </View>

            <TouchableOpacity style={styles.modalClose} onPress={fecharModal}>
              <Ionicons name="close" size={22} color="#F8EDE5" />
            </TouchableOpacity>
          </View>

          <VideoView style={styles.video} player={player} allowsPictureInPicture={false} nativeControls={false}/>
        </View>
      </View>
    </Modal>
    <ScrollView style={styles.container} contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 120 }]} showsVerticalScrollIndicator={false}>
      
    {/* O RESETAR CONQUISTAS(APAGAR DEPOIS) */}
    <TouchableOpacity style={styles.resetButton} onPress={resetarConquistas}>
    <Ionicons name="refresh-outline" size={16} color="#F8EDE5" />
    <Text style={styles.resetButtonText}>Resetar conquistas</Text>
  </TouchableOpacity>

     {/* Buscar */}
      <View style={styles.searchContainer}>
        {/* Ícone de lupa */}
        <Ionicons name='search' size={20} color="#5A3A2B"/> 
      <TextInput style={styles.searchInput}
      placeholder='Buscar livros'
      placeholderTextColor="#5A3A2B"
      value={search} //Pega o valor atual
      onChangeText={setSearch}/> {/*Atualiza o estado e o filtro roda*/}
    </View>

    {/* Categorias */}
    <Text style={styles.sectionTitle}>Categorias</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}> {/*Esse false tira aquele cursos de scroll feio */}
      {/* Percorre lista de categoria */}
      {categorias.map((cat)=> (
        <TouchableOpacity 
        key={cat} 
        style={[styles.category,
          selectedCategory === cat && styles.categoryActive //Se estiver selecionado, aplica o estilo extra
        ]}
        // Clicou na mesma categoria -> desmarca
        //Clicou em outr -> Seleciona
        onPress={()=> setselectedCategory(selectedCategory === cat ? null : cat)}
        >
           <Text style={styles.categoryText}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    {/* Destaque */}
    <View style={styles.rowTitle}>
      <Text style={styles.sectionTitle}>Destaques</Text>
      <Ionicons name='chevron-forward' size={20} color="#5A3A2B"/>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Se não tiver resultado */}
      {filtroLivros.length === 0 ? (
        // Aparece esse texto
          <Text style={styles.noResult}>Nenhum livro encontrado</Text>
      ) : (
        // Se sim, percorre livros
        filtroLivros.map((livro) => (
        <View key={livro?.id} style={styles.card}>
          <Image source={livro?.image} style={styles.image} />
          <Text style={styles.bookTitle}>{livro?.title}</Text>
          <Text style={styles.author}>{livro?.author}</Text>
          <Text style={styles.rating}>⭐ {livro?.rating}</Text>
          {/* Vai para a tela Detalhe, passando o livro como parâmetro */}
          <TouchableOpacity style={styles.button}
          onPress={()=> navigation.navigate("Detalhe", { livro })}>
            <Text style={styles.buttonText}>Saber mais</Text>
          </TouchableOpacity>
        </View>
      ))
    )}
    </ScrollView>

         {/* Recomendados */}
         <View style={styles.rowTitle}>
          <Text style={styles.sectionTitle}>Recomendados</Text>
            <Ionicons name='chevron-forward' size={20} color="#5A3A2B"/>
         </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filtroLivros.map((livro) => (
          <TouchableOpacity 
          key={livro?.id}
          onPress={()=> navigation.navigate("Detalhe", { livro })}>
            <Image source={livro?.image} style={styles.smallBook}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>

    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6E2D2",
  },

  content:{
    padding: 15,
    paddingTop:100,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8EDE5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
   

   shadowColor: "#D4A373",
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    height: 40,
    backgroundColor: "#F8EDE5"
  },
categoryActive: {
  backgroundColor: "#5A3A2B",
},
  sectionTitle: {
    fontSize: 18,
    color: "#5A3A2B",
    marginBottom: 10,
    fontFamily: "Merriweather_700Bold",
  },

  category: {
    backgroundColor: "#8B4513",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
  },

  categoryText: {
    color: "#F8EDE5",
    fontSize: 12,
    fontFamily: "Merriweather_400Regular"
  },

  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  card: {
    width: 150,
    backgroundColor: "#F8EDE5",
    borderRadius: 15,
    padding: 10,
    marginRight: 15,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    marginBottom: 5,
  },

  bookTitle: {
    fontSize: 12,
    color: "#5A3A2B",
    fontFamily: "Merriweather_700Bold",
  },

  author: {
    fontSize: 10,
    color: "#888",
  },

  rating: {
    fontSize: 10,
    marginVertical: 5,
  },

  button: {
    backgroundColor: "#00897B",
    padding: 6,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#F8EDE5",
    fontSize: 12,
    fontFamily: "Merriweather_400Regular"
  },

  smallBook: {
    width: 80,
    height: 110,
    borderRadius: 10,
    marginRight: 10,
  },
  noResult: {
  marginTop: 20,
  fontSize: 16,
  color: "#5A3A2B",
  textAlign: "center",
  fontFamily: "Merriweather_400Regular",
},

screen: {
  flex: 1,
  backgroundColor: "#F6E2D2",
},

modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(48, 31, 24, 0.68)",
  alignItems: "center",
  justifyContent: "center",
  padding: 22,
},

modalCard: {
  width: "100%",
  maxWidth: 360,
  backgroundColor: "#F8EDE5",
  borderRadius: 18,
  overflow: "hidden",
  elevation: 8,
  shadowColor: "#000",
  shadowOpacity: 0.25,
  shadowRadius: 12,
},

modalHeader: {
  backgroundColor: "#8B4513",
  padding: 16,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 12,
},

modalTitle: {
  color: "#F8EDE5",
  fontSize: 18,
  fontFamily: "Merriweather_700Bold",
},

modalSubtitle: {
  color: "#D4A373",
  fontSize: 12,
  marginTop: 6,
  maxWidth: 250,
  fontFamily: "Lora_400Regular",
},

modalClose: {
  width: 36,
  height: 36,
  borderRadius: 18,
  backgroundColor: "#5A3A2B",
  alignItems: "center",
  justifyContent: "center",
},

video: {
  width: "100%",
  aspectRatio: 9 / 16,
  backgroundColor: "#5A3A2B",
},

// APAGAR DEPOIS
resetButton: {
  backgroundColor: "#8B4513",
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 14,
  marginBottom: 18,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
},

resetButtonText: {
  color: "#F8EDE5",
  fontSize: 12,
  fontFamily: "Merriweather_700Bold",
},
});