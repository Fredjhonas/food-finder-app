import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";


export const routes = [
    { name: 'Main', title: '', component: HomeScreen, iconLeft: false },
    { name: 'Detail', title: 'Recipe', component: DetailScreen, iconLeft: true },
]