// Aqui definimos TODAS as telas do app e que cada um recebe ao navegar.
// Isso funciona como um "mapa" da navegação
// Exemplo: quando abrimos a tela Leitor, precisamos passar um livro para ela.

import { Livro } from "./data/livros"; /*importando os livros localmente */

export type RootStackParamList = {
  Inicial: undefined; //não recebe nada
  Login: undefined;
  Detalhe: {livro:Livro};
  Leitor: { livro: Livro }; // Recebe um objeto livro obrigatoriamente
  Menu: {
    screen?: 'Home' | 'Biblioteca' | 'Sobre'; //Define qual aba abrir dentro do menu
  };
};

// Bibliotecas responsáveis pela navegação entre telas
import { NavigationContainer } from '@react-navigation/native'; //"cérebro" da navegação
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //Menu inferior (abas)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //navegação em pilhas(tipo páginas)

// Componentes visuais(Cada coisa nova deve ser importada)
import { ImageBackground, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; //Ícones

// Telas
import Sobre from "./telas/Sobre";
import Home  from "./telas/Home";
import Inicial from './telas/Inicial';
import Login from './telas/Login';
import Biblioteca from './telas/Biblioteca';
import Detalhe from './telas/Detalhe';
import Leitor from './telas/Leitor';

// Importando Fontes(tem que baixar)
// useFonts carrega as fontes antes do app aparecer
// Isso evita bug visual(front trocando na tela)
import { useFonts, Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora';

// Criação dos navegadores
const Tab = createBottomTabNavigator(); //Menu de baixo
const Stack = createNativeStackNavigator<RootStackParamList>(); //Navegação principal(usar o RootStackParamList evita erro)

// Menu Principal com abas
function Menu(){
  return (
    <Tab.Navigator //O container onde fica as abas
      screenOptions={({route})=>({ // Configurações da tela
        //Esses são os parametros dos icones(foco, cor e tamanho)
        tabBarIcon:({focused, color, size})=>{
          let iconName:any; //1º Cria-se uma variável vazia(any) que pode receber qualquer coisa
          
          //Define o ícone de cada aba dinamicamente
          //Se estiver na tela "Sobre" vai ser o icone person, senão, vai mostrar o person-outline
          //Ou seja escolhe o nome baseado no nome da tela e muda quanso está selecionado(focused)
          if(route.name==="Sobre"){
            iconName = focused ? 'person' : "person-outline";
          }
          else if(route.name==="Home"){
            iconName = focused ? 'home' : "home-outline";
          }
          else if(route.name==="Biblioteca"){
            iconName = focused ? 'book' : "book-outline";
          }

          return (
            // Parte visual
            <View 
            style={{ //Centrelizando
              alignItems:"center", 
              justifyContent:"center"}}
            >
              {/* Monstra os icone que mudam graça ao icoName */}
            <Ionicons name={iconName} size={size} color={color} />

               {/* linha lateral */}
              <View
                style={{
                  position:"absolute",
                  right:-55,
                  top: 10,
                  width:1,
                  height:30,
                  backgroundColor:"#D4A373"
                }}
              />

          </View>

          )
        },

        headerShown:false, //Remove o cabeçalho padrão(topo branco)

        tabBarActiveTintColor:'#D4A373', //Cor dos icone ativos(selecionados)
        tabBarInactiveTintColor:'#D4A373', //Cor dos icones desativados

        // Estilização do menu inferior
        tabBarStyle:{
          backgroundColor:"#8B4513", //Cor de fundo
          borderTopLeftRadius:20, //Borda arrendoda
          borderTopRightRadius:20,
<<<<<<< Updated upstream
          height: 80,
=======
          height: 65, //Altura do menu inferior
>>>>>>> Stashed changes
          borderTopWidth:0,
          position:"absolute", 
          overflow:"hidden" //Esconde as partes indesejados, como aquelas partes brancas
        },
        // Estilização do texto das abas
        tabBarLabelStyle:{
          fontFamily:"Merriweather_400Regular", //A fonte 
          fontSize:12 //O Tamanho
        },
        // tabBarItemStyle:{
        //   borderRightWidth:1,
        //   borderRightColor:"#D4A373"
        // },

        // Fundo com a textura(no meu caso, couro)
        tabBarBackground: () => (
        <ImageBackground //Uso um componente do react-native(Imagem de Fundo)
          source={require("./assets/couro.png")} //Falo qual imagem é
          resizeMode="repeat" //Falo para eu repetir para ocupar toda área
          style={{flex:1}}
        />
      )
        

      })}
    >
      {/* São as abas do menu inferior */}
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Biblioteca" component={Biblioteca}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>
  )
}

// Componente principal do app
// Sim, ele é muito menor do que restante mesmo.
export default function App() {

  // Carrega as fonte antes de mostrar o app
  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
    Lora_400Regular,
    Lora_700Bold
  });

  // Enqquanto não carregar, não renderiza nada
  if (!fontsLoaded){
    return null;
  }

  return (
      /*Navegação principal(troca de telas) */
      /* Todas as telas devem ficar aqui, mesmo sem o tab */
    <NavigationContainer> 
  
      {/* Ordem das telas */}
      <Stack.Navigator screenOptions={{ headerShown:false}}>
          <Stack.Screen name='Inicial' component={Inicial}/>  {/* 1º abre o inicial*/}
          <Stack.Screen name='Login' component={Login}/>  {/* 2º Vai para o Login*/}
          <Stack.Screen name='Menu' component={Menu}/> {/* 3º Entra no Menu com as abas Home(aparece nesse) + Biblioteca + Sobre */}
          <Stack.Screen name='Detalhe' component={Detalhe}/>  {/* Pode ir */}
           <Stack.Screen name='Leitor' component={Leitor}/> {/* Pode ir */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}