import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login">


export default function Login() {
  

  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      {/* Botão para voltar */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={24} color={"#5a3a2b"}/>
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
      {/* Botão para voltar */}
         <Image source={require("../assets/logo.png")} style={styles.logo}/>
      </View>

      {/* Titulo */}
      <Text style={styles.title}>Papiro</Text>

      {/* Card */}
      <View style={styles.card}>
        {/* E-mail */}
        <Text style={styles.label}>E-mail</Text>
        <TextInput 
        placeholder='Digite seu e-mail' 
        placeholderTextColor="#5A3A2B" 
        style={styles.input}/>

         {/* Senha */}
        <Text style={styles.label}>Senha</Text>
        <TextInput
        placeholder='Digite sua senha'
        placeholderTextColor="#5A3A2B"  
        secureTextEntry 
        style={styles.input}/>

         {/* Botão */}
         <TouchableOpacity style={styles.button} 
         onPress={()=> navigation.replace("Menu", { screen: "Home"})}>
            <Text style={styles.buttonText}>Entrar</Text>
         </TouchableOpacity>

         {/* Link */}
         <Text style={styles.link}>Esqueceu a senha?</Text>
         <View style={styles.divider}/>
         <Text style={styles.link}>Criar conta</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEFE7',
    alignItems: 'center',
    paddingTop: 60
  },
  back: {
    position:"absolute",
    top: 50,
    left: 20,
  },
  logoContainer:{
    width:90,
    height:90,
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10
  },
  logo:{
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    color:"#5A3A2B",
    marginBottom:20,
    fontFamily:"Merriweather_700Bold"
  },
  card: {
    width: "85%",
    backgroundColor: "#F8EDE5",
    borderRadius: 20,
    padding: 20,

    // sombra
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },

  label: {
    color: "#5A3A2B",
    marginBottom: 5,
    fontFamily: "Lora_400Regular"
  },

  input: {
    backgroundColor: "#f7f3ee",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd"
  },

  button: {
    backgroundColor: "#00897B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },

  buttonText: {
    color: "#F8EDE5",
    fontSize: 16,
    fontFamily: "Merriweather_700Bold"
  },

  link: {
    textAlign: "center",
    marginTop: 15,
    color: "#00897B",
    fontFamily: "Lora_400Regular"
  },

  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10
  }
});
