import { View, Text, TouchableOpacity, Button, Image,StyleSheet } from 'react-native';
import{ useNavigation} from '@react-navigation/native';

export default function  App() {
const navigation = useNavigation(); 

return (

<View style={styles.view}> 
<Image  style={styles.imagemJeff} source={require('../assets/beta.png')}/> 
<Text style={{fontSize:30}}>Você é betaaaaa!!!!!!!</Text>

<View style={styles.card}>
<TouchableOpacity style={styles.button} onPress ={() => navigation.goBack()}>
<Text style={{fontSize:20}}>Voltar</Text>
</TouchableOpacity>

</View>
</View>

)}

const styles = StyleSheet.create({ 

imagemJeff: {
  width:250, 
  height:300, 
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