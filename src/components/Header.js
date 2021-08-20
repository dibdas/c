import className from 'classnames';
import { Link } from 'react-router-dom';
 const sx = className 
 const Header = () =>(
     <nav>
         <ul>
             <li><link to="/">Home</link></li>
             <li><link to="/categories">Categories</link></li>
         </ul>
     </nav>
 )
 export default Header ;
 
