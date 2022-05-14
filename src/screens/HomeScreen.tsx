import { useState } from "react";
import { api } from "../api";
import FoodList from "../components/FoodList"
import TopSearch from "../components/TopSearch"
import MainContainer from "../layout/MainContainer"

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    const onChangeSearch = async (query: string) => {
        setSearchQuery(query);

        if (query.length > 3) {
            let data = await api.getByName(query);
            setFoods(data);
        }
    }

    const onRandomPress = async () => {
        setLoading(true);
        let arrayData: any = []

        let data = await api.getRandom();
        arrayData.push(data);
        setFoods(arrayData);

        setLoading(false);
    }
    return (
        <MainContainer>
            <TopSearch
                searchQuery={searchQuery}
                onChangeSearch={onChangeSearch}
                onRandomPress={onRandomPress}
                loading={loading}
            />
            {foods?.length > 0 && <FoodList foods={foods} />}
        </MainContainer>
    )
}

export default HomeScreen