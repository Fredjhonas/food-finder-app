import { Card, Title } from 'react-native-paper'
import { View, Text } from 'react-native'

const FoodIngredient = ({ item }: any) => {

    const orderIngredients = (item: any) => {
        let ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (item[`strIngredient${i}`]) {
                ingredients.push(`${item[`strIngredient${i}`]} - ${item[`strMeasure${i}`]}`);
            } else { break; }
        }
        return (
            <View>
                {ingredients.map((ing, index) => (
                    <Text key={index}>-{ing}</Text>
                ))}
            </View>
        )
    };

    return (
        <Card.Content style={{ marginBottom: 20 }}>
            <Title style={{ backgroundColor: 'white', borderRadius: 0, paddingBottom: 5 }}>Ingredients:</Title>
            {orderIngredients(item)}
        </Card.Content>
    )
}



export default FoodIngredient