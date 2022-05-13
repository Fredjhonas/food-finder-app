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
                mode="outlined"
                compact
                labelStyle={{ color: 'white' }}
                style={styles.randomButton}
                onPress={() => onRandomPress()}> Random food</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    searchbar: {
        margin: 15,
        width: '95%'
    },
    randomButton: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TopSearch