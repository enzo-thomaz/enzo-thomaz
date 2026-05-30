import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BotaoAcao({ texto, onPress, ativo }) {
  return (
    <TouchableOpacity
      style={[styles.botao, ativo && styles.botaoAtivo]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#00E676',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 4,
  },

  botaoAtivo: {
    backgroundColor: '#00C853',
  },

  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#121212',
  },
});

