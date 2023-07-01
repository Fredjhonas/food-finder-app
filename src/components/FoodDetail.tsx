import { useState } from 'react';
import { StyleSheet, ScrollView, Platform, View } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { WebViewNativeEvent } from 'react-native-webview/lib/WebViewTypes';

// components
import FoodIngredient from './FoodIngredient';
import FoodVideo from './FoodVideo';
import { LinearGradient } from 'expo-linear-gradient';


const FoodDetail = ({ item }: any) => {
    const [loading, setLoading] = useState(false)

    const changeLoading = (event: WebViewNativeEvent) => {
        const { loading } = event
        if (loading) { setLoading(true) } else { setLoading(false) }
    }

    let currentPlatformStyle = Platform.OS === 'web' && window.innerWidth > 800 ? [styles.item, styles.itemWeb] : styles.item

    return (
        <View style={styles.container}>
            {item !== null && (
                <Card style={currentPlatformStyle}>
                    <Card.Title title={item.strMeal} subtitle={item.strCategory} />
                    <FoodVideo url={item.strYoutube} loading={loading} changeLoading={changeLoading} />
                    <ScrollView contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}>
                        <FoodIngredient item={item} />
                        <Card.Content>
                            <Title style={{ backgroundColor: 'white', borderRadius: 0, paddingBottom: 5 }}>Preparation:</Title>
                            <Paragraph>{item.strInstructions}</Paragraph>
                        </Card.Content>
                    </ScrollView>
                </Card>
            )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'transparent',
        padding: 10,
        // marginVertical: 8,
        // marginHorizontal: 16,
    },
    itemWeb: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})

export default FoodDetail