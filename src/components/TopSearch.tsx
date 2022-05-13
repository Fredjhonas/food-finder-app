import { StyleSheet, View } from 'react-native'
import { Button, Searchbar } from 'react-native-paper';

interface ITopSearchProps {
    onChangeSearch: (query: string) => void;
    searchQuery: string;
    onRandomPress: () => void;
    loading: boolean;
}

const TopSearch = ({ onChangeSearch, searchQuery, onRandomPress, loading }: ITopSearchProps) => {
    return (
        <View style={styles.content}>
            <Searchbar
                placeholder="Search for foods"
                style={styles.searchbar}
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <Button
                loading={loading}
                icon="shuffle"
                mode="contained"
                compact
                labelStyle={{ color: 'black' }}
                style={styles.randomButton}
                onPress={() => onRandomPress()} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    searchbar: {
        margin: 25,
        marginRight: 10,
        width: '70%'
    },
    randomButton: {
        backgroundColor: 'white',
        width: 50,
        margin: 25,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TopSearch