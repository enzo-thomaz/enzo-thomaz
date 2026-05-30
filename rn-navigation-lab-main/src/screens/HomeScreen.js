import { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const jogos = [
  {
    id: '1',
    titulo: 'The Legend of Zelda: Breath of the Wild',
    genero: 'Aventura / Mundo Aberto',
    plataforma: 'Nintendo Switch',
    nota: '10/10',
    sinopse:
      'Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.',
  },
  {
    id: '2',
    titulo: 'Red Dead Redemption 2',
    genero: 'Acao / Mundo Aberto',
    plataforma: 'PS4 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Uma epica historia sobre a vida fora da lei no coracao da America.',
  },
  {
    id: '3',
    titulo: 'God of War',
    genero: 'Acao / Aventura',
    plataforma: 'PS4 / PC',
    nota: '10/10',
    sinopse:
      'Kratos e Atreus embarcam em uma jornada pelos Nove Reinos.',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    genero: 'Metroidvania',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Explore um vasto reino subterraneo habitado por insetos.',
  },
];

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('');
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Detalhe', {
            ...item,
          })
        }
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>
            {item.titulo[0]}
          </Text>
        </View>

        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>
            {item.titulo}
          </Text>

          <Text style={styles.cardSubtitulo}>
            {item.genero}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>
          Catálogo de Games
        </Text>

        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>

      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  header: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },

  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  headerSubtitulo: {
    fontSize: 13,
    color: '#CCCCCC',
    marginTop: 4,
  },

  buscaContainer: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  buscaInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#FFFFFF',
  },

  lista: {
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#00E676',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  cardIconeTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121212',
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },

  cardSubtitulo: {
    fontSize: 13,
    color: '#BDBDBD',
  },
});
