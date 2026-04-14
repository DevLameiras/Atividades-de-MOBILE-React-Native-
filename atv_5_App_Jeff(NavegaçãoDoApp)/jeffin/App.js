
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import LittleJeff from './screens/LittleJeff';
import Musculinho from './screens/Musculinho';
import JeffCavil from './screens/JeffCavil';
import Beta from './screens/Beta';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Little Jeff" component={LittleJeff} />
      <Stack.Screen name="Musculinho" component={Musculinho} />
      <Stack.Screen name="Jeff Cavil" component={JeffCavil} />
      <Stack.Screen name="Betinha" component={Beta} />
       
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}
