import { Modal, View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  visible: boolean;
  titulo: string;
  descricao: string;
  icone: string;
  cor: string;
  onFechar: () => void;
};

export default function ConquistaModal({ visible, titulo, descricao, icone, cor, onFechar }: Props) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Animação de entrada
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 6,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      // Fecha sozinho após 4 segundos
      const timer = setTimeout(onFechar, 4000);
      return () => clearTimeout(timer);
    } else {
      scaleAnim.setValue(0);
      opacityAnim.setValue(0);
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="none">
      <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>

          {/* Ícone com cor da conquista */}
          <View style={[styles.iconCircle, { backgroundColor: cor }]}>
            <Ionicons name={icone as any} size={36} color="#F8EDE5" />
          </View>

          <Text style={styles.badge}>🏆 Conquista desbloqueada!</Text>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.descricao}>{descricao}</Text>

          <TouchableOpacity style={styles.botao} onPress={onFechar}>
            <Text style={styles.botaoText}>Incrível!</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(48, 31, 24, 0.75)",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  card: {
    width: "100%",
    backgroundColor: "#F8EDE5",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  badge: {
    fontSize: 13,
    color: "#8B4513",
    fontFamily: "Merriweather_400Regular",
    marginBottom: 8,
  },
  titulo: {
    fontSize: 22,
    color: "#5A3A2B",
    fontFamily: "Merriweather_700Bold",
    textAlign: "center",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 14,
    color: "#A67C52",
    fontFamily: "Lora_400Regular",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  botao: {
    backgroundColor: "#2A9D8F",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  botaoText: {
    color: "#F8EDE5",
    fontSize: 16,
    fontFamily: "Merriweather_700Bold",
  },
});