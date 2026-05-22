import AsyncStorage from "@react-native-async-storage/async-storage";

// Define o "nome da gaveta" (chave) onde essas informações serão guardadas no celular
const CONQUISTAS_KEY = "@papiro:conquistas";

// Define a estrutura (tipo) das conquistas: quais existem e que são do tipo verdadeiro/falso
export type Conquistas = {
  tutorialVideo: boolean; // Indica se assistiu ao vídeo tutorial
  audioLeitor: boolean;   // Indica se usou o áudio leitor
  comboFinal: boolean;    // Indica se liberou a conquista especial por fazer as duas coisas
};

// Estado inicial: quando o usuário abre o app pela primeira vez, tudo começa como "falso"
const conquistasIniciais: Conquistas = {
  tutorialVideo: false,
  audioLeitor: false,
  comboFinal: false,
};

// FUNÇÃO 1: Carrega as conquistas salvas no celular
export async function carregarConquistas() {
  // Busca o texto salvo na "gaveta" do AsyncStorage
  const salvas = await AsyncStorage.getItem(CONQUISTAS_KEY);
  
  // Se achou algo, transforma o texto de volta em objeto. Se não achou, usa o estado inicial (tudo falso).
  return salvas ? (JSON.parse(salvas) as Conquistas) : conquistasIniciais;
}

// FUNÇÃO 2: Salva uma nova conquista quando o usuário realiza uma ação
export async function salvarConquista(tipo: "tutorialVideo" | "audioLeitor") {
  // 1. Pega a lista de conquistas atualizada do banco de dados
  const conquistas = await carregarConquistas();

  // 2. Cria uma cópia da lista antiga e muda a conquista específica passada no argumento para "true"
  const atualizadas = {
    ...conquistas,
    [tipo]: true,
  };

  // 3. Regra de Negócio: Se o usuário completou o tutorial E usou o áudio leitor, ele ganha o combo final automaticamente
  atualizadas.comboFinal =
    atualizadas.tutorialVideo && atualizadas.audioLeitor;

  // 4. Transforma o objeto JavaScript em texto e salva definitivamente no celular
  await AsyncStorage.setItem(CONQUISTAS_KEY, JSON.stringify(atualizadas));

  // Retorna a lista atualizada para a tela do app poder mostrar o resultado na hora
  return atualizadas;
}
