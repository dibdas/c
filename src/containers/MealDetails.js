import className from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Categories from '../components/Categories';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { mealsByCategory } from '../API/api';
const MealsDetails= ({{ meals:{meals,status, error},dispatch }) =>{
    const {id} = useParams();
    useEffect(()=>{
        if(id!==meal.idMeal)
        dispatch(mealbyId(id));
    },[])
    if(status === actionsType.ERROR_MEALS){
        return(
            <div>
                Error:{error}
                </div>

        )
    }
    const Instructions = (instructions)=>{
        const list_of_instructions= instructions.split(new RegExp('\a/ab+c/')).filter((value) => value.length>1)
        return (
            <ul>
               {list_of_instructions.map((value,index)=> <li key={index}>{value}</li>)}
            </ul>
        )
        return instructions

    }
    const Ingrediants = (meal) =>{
        const list_of_ingrediants = []
        for(let i=0;i<16;i+=1){
            const ingerdiant = meal[`strIngredient${[i]}`];
            if(ingrediant){
                const measures = meal[`strMeasure${[i]}`]
                const measure_elements = (
                <li key={i}>{measure}<span>{ingrediant}</span></li>
            )
            list_of_ingrediants.push(ingrediant)
            }
        }
        return list_of_ingrediants
    }
    return(
        <div>
            <div>
                <img src=${meal.strMealThumb}></img>
            </div>
        </div>
    )

    

}
