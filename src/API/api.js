const mealsByCategory = async (category)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    const response = await url
    if(response.status==200){
        const data = await response.json()
        return data 
    }
    else{
        throw Error(404);
    }

}
const mealsByArea = async (area) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    const response = await url
    if(response.status==200){
        const data = await response.json()
        return data 
    }
    else{
        throw Error(404);
    }

}
const mealsById = async (id) => {
    const url = `www.themealdb.com/api/json/v1/1/lookup.php?${id}`
    const response = await url
    if(response.status==200){
        const data = await response.json()
        return data 
    }
    else{
        throw Error(404);
    }

}
export {mealsByArea,mealsByCategory,mealsById}