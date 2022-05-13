import { View, Text, StyleSheet } from 'react-native'

interface IFoodDetailProps {
    item: any
}

const FoodDetail = ({ item }: IFoodDetailProps) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>Detail</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: 'black'
    },
})

export default FoodDetail