import { AppRegistry } from 'react-native';
import { expo as appData } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';


export default function App() {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appData.name, () => App);
