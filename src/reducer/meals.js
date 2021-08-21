
import {ERROR_MEALS,SUCCESS_MEALS,IDLE_MEALS}from '../actions/constants'
const defaultState={ meals:[ {
    idCategory:'1',
    strCategory:"Vegan",
    strCategoryThumb:"https:www.themealdb.com/images/category/vegan.png",
    strCategoryDescription: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
},
{
    idCategory :"2",
    strCategory:"Vegetarian",
    strCategoryThumb:"https:www.themealdb.com/images/category/vegetarian.png",
    strCategoryDescription: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
},
{
    idCategory :"3",
    strCategory :"Breakfast",
    strCategoryThumb :"https:www.themealdb.com/images/category/breakfast.png",
    strCategoryDescription: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
}],status:IDLE_MEALS,error:null}

const mealsreducer = (state= defaultState,action)=>{
    switch(action.type){
        case SUCCESS_MEALS:
            console.log(action);
            return {
                ...state,
                status: SUCCESS_MEALS,
                meals: action.data,
                error: null
            }
            case ERROR_MEALS:
            return {
                ...state,
                status: ERROR_MEALS,
                error: action.error
            }
            default:{
                return state
            }
    }
}

export default mealsreducer;