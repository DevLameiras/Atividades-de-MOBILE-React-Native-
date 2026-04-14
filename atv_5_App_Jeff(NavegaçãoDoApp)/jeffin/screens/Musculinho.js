import { View, Text, TouchableOpacity, Button, Image,StyleSheet } from 'react-native';
import{ useNavigation} from '@react-navigation/native';

export default function  App() {
  const navigation = useNavigation(); 
return (

<View style={styles.view}> 
<Image  style={styles.imagemJeff} source={require('../assets/musculinho.png')}/> 
<Text style={{fontSize:22,textAlign:'center'}}>Você tem certeza que quer ir para a aula do jeff cavil?</Text>

<View style={styles.card}>
<TouchableOpacity style={styles.button} onPress ={() => navigation.navigate('Jeff Cavil')}>
<Text style={{color:'green',fontSize:20,}}>Sim</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress ={() => navigation.navigate('Betinha')}>
<Text style={{color:'red',fontSize:20,}}>Não</Text>
</TouchableOpacity>

</View>


</View>


)}


const styles = StyleSheet.create({ 

imagemJeff: {
  width:250, 
  height:350, 
  margin:40,
},

view: {
  display:'flex',
  alignItems:'center'
},

card: {
  width:150,
  height:50,
  display:'flex',
  justifyContent:'center',
  flexDirection:'row',
  padding:15,
  gap:40,
},

button:{
  width:100,
  height:45,
  backgroundColor:'#e1e1e1',
  display:'flex',
  alignItems:'center',
  padding:2,
  justifyContent:'center',
},


})