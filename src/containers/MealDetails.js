

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {ERROR_MEALS} from '../actions/constants'
import { fetchmealsById } from '../actions';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MealsDetails= ({meals,status, error,dispatch }) => {
    const {id} = useParams();
    console.log(id)
    useEffect(()=>{
        if(id!==meals.idMeal)
        dispatch(fetchmealsById(id));
    })
    if(status === ERROR_MEALS){
        return(
            <div>
                Error:{error}
                </div>

        )
    }
    const Instructions = (instructions)=>{
        if(instructions){
        const list_of_instructions= instructions.split(new RegExp('/ab+c/')).filter((value) => value.length>1)
        return (
            <ul>
               {list_of_instructions.map((value,index)=> <li key={index}>{value}</li>)}
            </ul>
        )
        }
        return instructions;
    }
    const Ingrediants = (meal) =>{
        const list_of_ingrediants = []
        for(let i=0;i<20;i+=1){
            const ingrediant = meal[`strIngredient${[i]}`];
            if(ingrediant){
                const measures = meal[`strMeasure${[i]}`]
                const measure_elements = (
                <li key={i}>{measures}<span>{ingrediant}</span></li>
            )
            list_of_ingrediants.push(measure_elements)
            }
        }
        return list_of_ingrediants
    }
    return(
        <div>
            <div>
                <img src={meals.strMealThumb} alt={meals.strMeal}></img>
            </div>
            <h2>${meals.strMeal}</h2>
            <div>
                <h3>Ingrediants</h3>
                <ul>
                    {Ingrediants(meals)}
                </ul>
            </div>
            <div>
                <h3>Instructions</h3>
                <ul>
                    {Instructions(meals.strInstructions)}
                </ul>
            </div>
        </div>
    )

}

MealsDetails.propTypes = {
    meal: PropTypes.shape({
        status: PropTypes.string.isRequired,
        error: PropTypes.string,
        meals:  PropTypes.objectOf(PropTypes.string).isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state)=> ({
    meal: state.meal
})

export default connect (mapStateToProps)(MealsDetails)


