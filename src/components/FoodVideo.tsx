import { Text, Platform, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
import { Card } from 'react-native-paper'

interface IFoodVideoProps {
    url: string;
    loading: boolean;
    changeLoading: (event: any) => void;
}

const FoodVideo = ({ url, loading, changeLoading }: IFoodVideoProps) => {

    const webViewRender = (url: string) => {
        let urlReplace = url.replace('watch?v=', 'embed/')
        return (
            Platform.OS === 'web' ? <iframe src={urlReplace} height={350} width='100%' allowFullScreen /> :
                <WebView onNavigationStateChange={(event) => changeLoading(event)} source={{ uri: url }} />
        )
    }

    return (
        url.length > 0 && <Card.Content style={styles.video}>
            {loading && <Text>Loading video....</Text>}
            {webViewRender(url)}
        </Card.Content>
    )
}

const styles = StyleSheet.create({
    video: {
        marginBottom: 20,
        height: 400,
    },
})

export default FoodVideo