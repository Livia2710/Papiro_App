import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Sobre() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
      <Text style={styles.text}>Sobre</Text>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b4513',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#f5f5dc",
  },
  logo:{
    width: 200,
    height: 200,

  }
});
