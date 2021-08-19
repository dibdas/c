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
        const list_of_instructions= instructions.split(new RegExp('\/ab+c/')).filter((value) => value.length>1)

    }

}
