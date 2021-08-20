import rootReducer from "./index"
import thunk from 'redux-thunk';

import { applyMiddleware,createStore } from 'redux';
const Initialstate = {
    categories :[
      { idCategory:'1',strCategory:"Vegan",strCategoryThumb:"https:\/\/www.themealdb.com\/images\/category\/vegan.png",
      strCategoryDescription: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."},
      { idCategory :"2",strCategory:"Vegetarian",strCategoryThumb:"https:\/\/www.themealdb.com\/images\/category\/vegetarian.png",strCategoryDescription: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."},
      { idCategory :"3", strCategory :"Breakfast", strCategoryThumb :"https:\/\/www.themealdb.com\/images\/category\/breakfast.png",
      strCategoryDescription: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."}
    ]
  }


const store = createStore(
  rootReducer,
  Initialstate,
  applyMiddleware(thunk),
);
export default store;