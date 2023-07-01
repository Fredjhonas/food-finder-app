import { useState, useEffect } from "react";
import { api } from "../api";
import FoodList from "../components/FoodList"
import TopSearch from "../components/TopSearch"
import MainContainer from "../layout/MainContainer"
import { View } from "react-native";

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const onChangeSearch = async (query: string) => {
        setSearchQuery(query);
        let data = await api.getByName(query);
        setFoods(data);
    }

    const onRandomPress = async () => {
        setLoading(true);
        let arrayData: any = []

        let data = await api.getRandom();
        arrayData.push(data);
        setFoods(arrayData);

        setLoading(false);
    }

    useEffect(() => {
        onChangeSearch(searchQuery);
    }, [])
    return (
        <MainContainer>
            <View style={{ padding: 20 }}>
                <TopSearch
                    searchQuery={searchQuery}
                    onChangeSearch={onChangeSearch}
                    onRandomPress={onRandomPress}
                    loading={loading}
                />
                {foods?.length > 0 && <FoodList foods={foods} />}
            </View>
        </MainContainer>
    )
}

export default HomeScreen