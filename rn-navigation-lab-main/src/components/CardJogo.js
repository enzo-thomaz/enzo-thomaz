import { View, Text, StyleSheet } from 'react-native';

export default function CardJogo({
  titulo,
  genero,
  plataforma,
  nota,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.info}>
         Gênero: {genero}
      </Text>

      <Text style={styles.info}>
         Plataforma: {plataforma}
      </Text>

      <Text style={styles.nota}>
         Nota: {nota}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
  },

  titulo: {
    color: '#00E676',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  info: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 4,
  },

  nota: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
  },
});
