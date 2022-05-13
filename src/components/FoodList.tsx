import { useNavigation } from '@react-navigation/core';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { Card } from 'react-native-paper'


interface IFoodListProps {
    foods: any;
}

const FoodList = ({ foods }: IFoodListProps) => {
    console.log('Foods: ', foods);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={foods}
                renderItem={({ item }) => {
                    return (
                        <Card style={styles.item} onPress={() => navigation.navigate('Detail')}>
                            <Card.Title title={item.strMeal} />
                            <Card.Cover style={styles.cover} source={{ uri: item.strMealThumb }} />
                        </Card>
                    )
                }}
                keyExtractor={item => item.idMeal}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    cover: {
        width: 300,
        height: 300
    }
});

export default FoodList