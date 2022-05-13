import { View, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const MainContainer = ({ children }: any) => {
    const colors = ['#33d571', 'rgb(164, 216, 179)']

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.background} colors={colors}>
                {children}
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
});

export default MainContainer