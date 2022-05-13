const baseUrl = 'https://www.themealdb.com/api/json/v1/1/'

export const api = {
    getByName: async (term: string) =>{
        let response = await fetch(`${baseUrl}search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            return data.meals
            
        }).catch(err => {
            console.log("Error getbytext: ", err)
        });

        return response
    },
    getRandom: async () =>{
        let response = await fetch(`${baseUrl}random.php`)
        .then(res => res.json())
        .then(data => {
            return data.meals[0]
            
        }).catch(err => {
            console.log("Error getrandom: ", err)
        });

        return response
    },
    getByMealId: async (mealId: string) => {
        let response = await fetch(`${baseUrl}lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            return data.meals[0]
            
        }).catch(err => {
            console.log("Error getByMealId: ", err)
        });

        return response
    }
}