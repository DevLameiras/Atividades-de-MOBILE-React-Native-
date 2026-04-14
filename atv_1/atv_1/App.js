import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.textoItalico}>Gustavo Lameiras.</Text>
      <Text style={styles.textoNegrito}>Gustavo Mitsuo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff00',
    padding: 8,
  },
  textoItalico: {
    margin: 10,
    fontSize: 50,
    fontWeight: 'Italic',
    textAlign: 'center',
    color: 'blue',
    fontFamily: 'calibri',
  },
  textoNegrito: {
    margin: 10,
    fontSize: 100,
    fontWeight: 'Bold',
    textAlign: 'center',
    color: 'red',
    fontFamily: 'times new roman',
  },
});
