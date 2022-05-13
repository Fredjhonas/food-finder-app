import { useRoute } from '@react-navigation/core'
import { useEffect, useState } from 'react';
import FoodDetail from '../components/FoodDetail'
import MainContainer from '../layout/MainContainer'

const DetailScreen = () => {
    const route = useRoute();
    const [foodDetail, setFoodDetail] = useState(null);
    const food = route.params?.food || null;

    useEffect(() => {
        if (food !== null) {
            setFoodDetail(food);
        }
    }, [food])


    return (
        <MainContainer>
            <FoodDetail item={foodDetail} />
        </MainContainer>
    )
}

export default DetailScreen