import {  TextInput, StyleSheet, Text,  View, Image, TouchableOpacity, Alert , ScrollView} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; //Hook de navegação
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons';
import  { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Esse parte diz: Essa tela é a Login e usa o Stack
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Login"> //Curiosidade: como isso é puramente TypeScript pode ficar da função

const USER_NAME_KEY = "@papiro:nomeUsuario";

export default function Login() {
  // Controle de navegação
  const navigation = useNavigation<NavigationProps>();
  const insets = useSafeAreaInsets();

  const [isCadastro, setIsCadastro] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function acessarApp() {
  if (isCadastro && nomeUsuario.trim().length === 0) {
    Alert.alert("Nome obrigatório", "Digite seu nome de usuário para criar a conta.");
    return;
  }

  if (email.trim().length === 0 || senha.trim().length === 0) {
    Alert.alert("Campos obrigatórios", "Digite seu e-mail e sua senha.");
    return;
  }

  const nomeParaSalvar = isCadastro ? nomeUsuario.trim() : nomeUsuario.trim();

  if (nomeParaSalvar.length > 0) {
    await AsyncStorage.setItem(USER_NAME_KEY, nomeParaSalvar);
  }

  navigation.replace("Menu", { screen: "Home" });
}

  return (
    <ScrollView style={styles.container} contentContainerStyle={[
      styles.content,
      { paddingTop: insets.top + 70, paddingBottom: insets.bottom + 40 },
    ]}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled">

      {/* Logo */}
      <View style={styles.logoContainer}>
      {/* Botão para voltar */}
         <Image source={require("../assets/logo.png")} style={styles.logo}/>
      </View>

      {/* Titulo */}
      <Text style={styles.title}>Papiro</Text>

      {/* Card */}
      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          {isCadastro ? "Criar conta" : "Entrar"}
        </Text>

            {isCadastro && (
          <>
            <Text style={styles.label}>Nome de usuário</Text>
            <TextInput
              placeholder="Digite seu nome"
              placeholderTextColor="#5A3A2B"
              style={styles.input}
              value={nomeUsuario}
              onChangeText={setNomeUsuario}
            />
          </>
        )}

        {/* E-mail */}
        <Text style={styles.label}>E-mail</Text>
        <TextInput 
        placeholder="Digite seu e-mail" 
        placeholderTextColor="#5A3A2B" 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"/>

         {/* Senha */}
        <Text style={styles.label}>Senha</Text>
        <TextInput
       placeholder="Digite sua senha"
        placeholderTextColor="#5A3A2B"  
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}/>

         {/* Botão */}
         <TouchableOpacity style={styles.button} 
         //Diferente do navigate, o replace substitui a tela atual, em vez de voltar pro login
         onPress={acessarApp}>
            <Text style={styles.buttonText}>
            {isCadastro ? "Criar conta" : "Entrar"}
          </Text>
         </TouchableOpacity>

         {/* Link */}
         <Text style={styles.link}>Esqueceu a senha?</Text>
         <View style={styles.divider}/>
         <TouchableOpacity onPress={() => setIsCadastro(!isCadastro)}>
            <Text style={styles.link}>
              {isCadastro ? "Já tenho uma conta" : "Criar conta"}
            </Text>
          </TouchableOpacity>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEFE7',
  },

  content: {
    flexGrow: 1,
    alignItems: "center",
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
    width: 140,
    height: 140,
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
  },

  cardTitle: {
  fontSize: 20,
  color: "#5A3A2B",
  marginBottom: 18,
  textAlign: "center",
  fontFamily: "Merriweather_700Bold",
},
});
