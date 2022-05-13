import { useState } from 'react';
import { Text, StyleSheet, ScrollView, Platform } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import { WebView } from 'react-native-webview';
import { WebViewNativeEvent } from 'react-native-webview/lib/WebViewTypes';
import FoodIngredient from './FoodIngredient';


const FoodDetail = ({ item }: any) => {
    const [loading, setLoading] = useState(false)

    const changeLoading = (event: WebViewNativeEvent) => {
        const { loading } = event
        if (loading) { setLoading(true) } else { setLoading(false) }
    }

    const webViewRender = (url: string) => {
        let urlReplace = url.replace('watch?v=', 'embed/')
        return (
            Platform.OS === 'web' ? <iframe src={urlReplace} height={350} width='100%' allowFullScreen /> :
                <WebView onNavigationStateChange={(event) => changeLoading(event)} source={{ uri: item.strYoutube }} />
        )
    }

    let currentPlatformStyle = Platform.OS === 'web' && window.innerWidth > 600 ? [styles.item, styles.itemWeb] : styles.item

    return (
        <ScrollView style={styles.container}>
            {item !== null && (
                <Card style={currentPlatformStyle}>
                    <Card.Title title={item.strMeal} subtitle={item.strCategory} />
                    {item.strYoutube.length > 0 && <Card.Content style={styles.video}>
                        {loading && <Text>Loading video....</Text>}
                        {webViewRender(item.strYoutube)}
                    </Card.Content>}
                    <FoodIngredient item={item} />
                    <Card.Content>
                        <Title>Preparation</Title>
                        <Paragraph>{item.strInstructions}</Paragraph>
                    </Card.Content>
                </Card>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemWeb: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        fontSize: 32,
        color: 'black'
    },
    video: {
        marginBottom: 20,
        height: 350
    },
})

export default FoodDetail