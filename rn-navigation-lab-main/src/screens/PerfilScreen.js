import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Meu Perfil Gamer</Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>E</Text>
        </View>

        <Text style={styles.nome}>Enzo Thomaz</Text>
        <Text style={styles.email}>enzo@email.com</Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Jogos Salvos</Text>
          <Text style={styles.infoValor}>2</Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Favoritos</Text>
          <Text style={styles.infoValor}>2</Text>
        </View>

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Gerenciar Biblioteca</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },

  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  cartao: {
    margin: 16,
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },

  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#00E676",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginBottom: 16,
  },

  avatarTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#121212",
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "#BDBDBD",
    marginBottom: 20,
  },

  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#333333",
    marginBottom: 16,
  },

  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },

  infoLabel: {
    fontSize: 14,
    color: "#BDBDBD",
  },

  infoValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#00E676",
  },

  botao: {
    marginHorizontal: 16,
    backgroundColor: "#00E676",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  botaoTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#121212",
  },
}
);
