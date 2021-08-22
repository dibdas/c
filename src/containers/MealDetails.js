
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {ERROR_MEALS} from '../actions/constants'
import { fetchmealsById } from '../actions';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MealsDetails= ({ meal, status, error,dispatch }) => {
    const {id} = useParams();
    useEffect(()=>{
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

    if (!meal)
        return "Loading"

    return (
        <div>
            <div>
                <img src={meal.strMealThumb} alt={meal.strMeal}></img>
            </div>
            <h2>${meal.strMeal}</h2>
            <div>
                <h3>Ingrediants</h3>
                <ul>
                    {Ingrediants(meal)}
                </ul>
            </div>
            <div>
                <h3>Instructions</h3>
                <ul>
                    {Instructions(meal.strInstructions)}
                </ul>
            </div>
        </div>
    )

}

MealsDetails.propTypes = {
    meal: PropTypes.shape({
        error: PropTypes.string,
        meal:  PropTypes.objectOf(PropTypes.string),
    }),
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state)=> ({
    meal: state.mealreducer.meal[0],
});

export default connect (mapStateToProps)(MealsDetails)