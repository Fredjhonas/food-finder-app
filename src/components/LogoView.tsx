import { View, StyleSheet } from 'react-native'
import { Button, Headline, IconButton } from 'react-native-paper'

const LogoView = () => {
    return (
        <View style={styles.textContent}>
            <Headline style={{ color: 'white', fontSize: 24 }}>Food Finder</Headline>
            <IconButton icon='food' color='white' size={22} style={{ margin: 0 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    textContent: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        // width: 200,
    }
})

export default LogoView