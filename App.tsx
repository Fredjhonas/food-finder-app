import { AppRegistry } from 'react-native';
import { expo as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';

// screens
import HomeScreen from './src/screens/HomeScreen';

// components
import LogoView from './src/components/LogoView';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const stacks = [
    { name: 'Main', title: '', component: HomeScreen, iconLeft: false },
    { name: 'Detail', title: 'Recipe', component: DetailScreen, iconLeft: true },
  ]

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {stacks.map(({ name, component, iconLeft, title }, index) => (
          <Stack.Screen
            key={index}
            name={name}
            component={component}
            options={({ navigation }) => ({
              title: title,
              headerLeft: () => iconLeft && <IconButton size={30} style={{ marginLeft: -15 }} icon='chevron-left' color='white' onPress={() => navigation.goBack()} />,
              headerRight: () => <LogoView />,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'black' },
              statusBarStyle: 'dark',
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName.name, () => App);
