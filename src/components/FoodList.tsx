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
                            <Card.Title style={styles.title} title={item.strMeal} titleStyle={{ margin: 0, padding: 0 }} />
                            <Card.Cover style={styles.cover} source={{ uri: item.strMealThumb }} />
                            <Card.Actions style={styles.action}>
                                <Button
                                    mode='outlined'
                                    onPress={() => navigation.navigate('Detail', { food: item })}
                                    style={{ borderRadius: 40, backgroundColor: 'black', padding: 5 }}
                                    labelStyle={{ color: 'white' }}
                                    icon="arrow-right"
                                >
                                    Recipe Details
                                </Button>
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
        // width: '100%',
    },
    item: {
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    cover: {
        // width: widthStyle,
        height: 300
    },
    title: {
        width: widthStyle,
        paddingLeft: 0,
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 0,
        paddingTop: 20
    }
});

export default FoodList