export const getIngredients = (item) => {
    const ingredients = []
    for (const [key, value] of Object.entries(item)){
        if (key.includes("Ingredient") && value){
            ingredients.push(value)
        }
    }
    return ingredients
}