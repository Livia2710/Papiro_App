import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../App"; 
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { useState } from 'react'; 

// data
import { livros } from "../data/livros";
import { categorias } from "../data/categorias";

type NavigationProps = NativeStackNavigationProp<RootStackParamList> //Não especifica, pois Home está dentro do Menu

export default function Home() {
 const navigation = useNavigation<NavigationProps>(); 
 const insets = useSafeAreaInsets(); //Pega as bordas do celular (ex: onde tem o notch)

  const [search, setSearch] = useState(""); 
  const [selectedCategory, setselectedCategory] = useState<string | null>(null);

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

  return (
    //Tela inteira rolável
    <ScrollView style={styles.container} contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 120 }]} showsVerticalScrollIndicator={false}>
      
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

  categories: {
    flexDirection: "row",
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
});