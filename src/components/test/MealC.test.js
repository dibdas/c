
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import MealsC from '../MealsC';
it ('component',() =>{
    const meal = {
        idMeal: '45677',
        strMeal: 'name',
        strMealThumb: 'path'
    };
        const {container} = render (
        <MemoryRouter>
            <MealsC category={meal} />
        </MemoryRouter>
    );
    expect(container.textContent).toMatch(meal.strCategory)

})