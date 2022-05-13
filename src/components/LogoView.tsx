import { View, StyleSheet } from 'react-native'
import { Button, Headline } from 'react-native-paper'

const LogoView = () => {
    return (
        <View style={styles.textContent}>
            <Headline style={{ color: 'white' }}>Food Finder</Headline>
            <Button icon='food' labelStyle={{ color: 'white', fontSize: 22 }}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textContent: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: -25,
        width: 200,
    }
})

export default LogoView