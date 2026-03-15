import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Telas
import Sobre from "./telas/Sobre";
import Home  from "./telas/Home";
import Inicial from './telas/Inicial';

// Fontes
import { useFonts, Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora';

const Tab = createBottomTabNavigator();

function Menu(){
  return (
    <Tab.Navigator
      screenOptions={({route})=>({

        tabBarIcon:({focused, color, size})=>{
          let iconName:any;

          if(route.name==="Sobre"){
            iconName = focused ? 'paw' : "paw-outline";
          }
          else if(route.name==="Home"){
            iconName = focused ? 'home' : "home-outline";
          }
          else if(route.name==="Inicial"){
            iconName = focused ? 'book' : "book-outline";
          }

          return (
            <View 
            style={{
              alignItems:"center", 
              justifyContent:"center"}}
            >
      
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

        headerShown:false,

        tabBarActiveTintColor:'#D4A373',
        tabBarInactiveTintColor:'#D4A373',

        tabBarStyle:{
          backgroundColor:"#8B4513",
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          height: 65,
          borderTopWidth:0,
          position:"absolute",
          overflow:"hidden" //Esconde as partes indesejados, como aquelas partes brancas
        },

        tabBarLabelStyle:{
          fontFamily:"Merriweather_400Regular",
          fontSize:12
        },
        // tabBarItemStyle:{
        //   borderRightWidth:1,
        //   borderRightColor:"#D4A373"
        // },
        tabBarBackground: () => (
        <ImageBackground
          source={require("./assets/couro.png")}
          resizeMode="repeat"
          style={{flex:1}}
        />
      )
        

      })}
    >
      <Tab.Screen name="Inicial" component={Inicial}/>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>
  )
}

export default function App() {

  const [fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
    Lora_400Regular,
    Lora_700Bold
  });

  if (!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Menu/>
    </NavigationContainer>
  )
}