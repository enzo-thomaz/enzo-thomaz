import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const jogoMock = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura / Mundo Aberto",
  plataforma: "Nintendo Switch",
  nota: "10/10",
  sinopse:
    "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
};

export default function DetalheScreen({ route, navigation }) {
  const {
    titulo,
    genero,
    plataforma,
    nota,
    sinopse,
  } = route?.params ?? jogoMock;

  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>
              {titulo[0]}
            </Text>
          </View>

          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>

          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>

            <View style={styles.metaSeparador} />

            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>

        <TouchableOpacity
          style={[styles.botao, isSalvo && styles.botaoAtivo]}
          onPress={() => setIsSalvo((prev) => !prev)}
        >
          <Text style={styles.botaoTexto}>
            {isSalvo
              ? "Remover da Lista"
              : "Adicionar a Lista"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  hero: {
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    paddingVertical: 28,
    paddingHorizontal: 20,
  },

  heroIcone: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#00E676",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  heroIconeTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#121212",
  },

  heroTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 6,
  },

  heroSubtitulo: {
    fontSize: 14,
    color: "#CCCCCC",
    marginBottom: 16,
  },

  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },

  metaItem: {
    alignItems: "center",
  },

  metaLabel: {
    fontSize: 11,
    color: "#AAAAAA",
    marginBottom: 2,
  },

  metaValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  metaSeparador: {
    width: 1,
    height: 28,
    backgroundColor: "rgba(255,255,255,0.3)",
  },

  secao: {
    margin: 16,
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 16,
  },

  secaoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00E676",
    marginBottom: 10,
  },

  detalheTexto: {
    fontSize: 14,
    color: "#FFFFFF",
    lineHeight: 22,
  },

  botao: {
    margin: 16,
    marginTop: 4,
    backgroundColor: "#333333",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 32,
  },

  botaoAtivo: {
    backgroundColor: "#00E676",
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
