import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import { routes } from './routes';

// components
import LogoView from '../components/LogoView';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    const LeftIcon = (navigation: { goBack: () => void; }) => (
        <IconButton
            size={30}
            icon='chevron-left'
            color='white'
            onPress={() => navigation.goBack()}
        />
    )

    return (
        <Stack.Navigator initialRouteName="Home">
            {routes.map(({ name, component, iconLeft, title }, index) => (
                <Stack.Screen
                    key={index}
                    name={name}
                    component={component}
                    options={({ navigation }) => ({
                        title: title,
                        headerLeft: () => iconLeft && LeftIcon(navigation),
                        headerRight: () => <LogoView />,
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: 'black' },
                        statusBarStyle: 'dark',
                    })}
                />
            ))}
        </Stack.Navigator>
    )
}

export default StackNavigation