import { View, StyleSheet, Image, TouchableOpacity, Modal, Text } from 'react-native';
import { useState } from 'react'

export default function Miranha() {

const [visivel, setVisivel] = useState(false)
const [visivelAmerica, setVisivelAmerica] = useState(false)
return (

<View style={styles.container}>

  <Modal
    visible={visivel}
    transparent
    animationType="fade"
  >

    <View style={styles.fundoModal}>

      <View style={styles.cardModal}>

      <Image style={{width:250, height:250,}} source={require('../assets/thor.webp')} />

        <TouchableOpacity onPress={() => setVisivel(false)}>
          <Text>Fechar</Text>
        </TouchableOpacity>

      </View>

    </View>

  </Modal>


  <Modal
    visible={visivelAmerica}
    transparent
    animationType="fade"
  >

    <View style={styles.fundoModal}>

      <View style={styles.cardModal}>

       <Image style={{width:250, height:250,}} source={require('../assets/CaptainAmerica.webp')} />

        <TouchableOpacity onPress={() => setVisivelAmerica(false)}>
          <Text>Fechar</Text>
        </TouchableOpacity>

      </View>

    </View>

  </Modal>

  <TouchableOpacity onPress={() => setVisivel(true)}>
    <Image style={styles.logo} source={require('../assets/thor.webp')} />
  </TouchableOpacity>

<TouchableOpacity onPress={() => setVisivelAmerica(true)}>
  <Image style={styles.logo} source={require('../assets/CaptainAmerica.webp')} />
</TouchableOpacity>
</View>

);
}

const styles = StyleSheet.create({

container: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  flexDirection: 'row',
},

logo: {
  margin: 10,
  height: 128,
  width: 128,
},

fundoModal: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "center",
  alignItems: "center"
},

cardModal: {
  width: 300,
  height:300,
  padding: 20,
  backgroundColor: "white",
  borderRadius: 10,
  alignItems: "center"
}

});