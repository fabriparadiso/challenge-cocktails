import axios from 'axios'
export const getCocktails = async () => {
    let endpoint = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
    try{
        const response = await axios.get(endpoint)
        const data = response.data
        const responses = Object.values(data)[0]
        return responses
    }
    catch (error){
        console.error("Could not fetch cocktails from API endpoint")
    }
}

export const getIngredients = async (idDrink) => {
    const detail = await getDetail(idDrink)
    const ingredients = []
    for (const [key, value] of Object.entries(detail)){
        if (key.includes("Ingredient") && value){
            ingredients.push(value)
        }
    }
    return ingredients
}

export const getDetail = async (idDrink) => {
    let endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    try{
        const response = await axios.get(endpoint)
        const detail = response.data.drinks[0]
        return detail
    }
    catch (error){
        console.error("Could not fetch cocktails from API endpoint")
    }
}