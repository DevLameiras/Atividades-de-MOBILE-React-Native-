

import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Miranha from './Miranha';
import Thor from './Thor'


export default function Herois() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Herois da Marvel
      </Text>
        <Miranha />
        <Thor />
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    padding: 8,
  },
  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
