import { BrowserRouter, Route } from 'react-router-dom';
import Categories from './containers/Categories';
import MealDetails from './containers/MealDetails';
import Meals from './containers/Meals';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route component={Meals} exact path="/" />
        <Route component={Categories} exact path="/categories" />
        <Route component={MealDetails} exact path="/meal/:id" />
        <Route component={Meals} exact path="/meals/:categorytype" />
      </BrowserRouter>

    </>
  );
}

export default App;
