import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './components/Categoriesy';
import MealDetails from './containers/MealDetails';
import Meals from './containers/Meals';


function App() {
  return (
    <>
     <BrowserRouter>
      <Route component={ Meals} exact path="/" />
      <Route component={Categories} exact path= "/categories" />
      <Route component={MealDetails} exact path = "/meal/:id" />
      <Route component={Meals} exact path = "/meal/:categorytype" />
    </BrowserRouter>
     
    </>
  );
}

export default App;
