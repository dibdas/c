
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Categoriesy from '../Categoriesy';
it ('component',() =>{
    const category = {
        strCategory: 'chicken',
    };
        const {container} = render (
        <MemoryRouter>
            <Categoriesy category={category} />
        </MemoryRouter>
    );
    expect(container.textContent).toMatch(category.strCategory)

})