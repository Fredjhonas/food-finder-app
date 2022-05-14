import { useNavigation } from '@react-navigation/core';
import { FlatList, StyleSheet, SafeAreaView, Platform } from 'react-native'
import { Card, Button } from 'react-native-paper'

const FoodList = ({ foods }: any) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={foods}
                renderItem={({ item }) => {
                    return (
                        <Card style={styles.item} onPress={() => navigation.navigate('Detail', { food: item })}>
                            <Card.Title style={styles.title} title={item.strMeal} />
                            <Card.Cover style={styles.cover} source={{ uri: item.strMealThumb }} />
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Detail', { food: item })}>See recipe</Button>
                            </Card.Actions>
                        </Card>
                    )
                }}
                keyExtractor={item => item.idMeal}
            />
        </SafeAreaView>
    )
}

const widthStyle = Platform.OS === 'web' && window.innerWidth > 600 ? 400 : 300

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    cover: {
        width: widthStyle,
        height: 300
    },
    title: {
        width: widthStyle,
    }
});

export default FoodList