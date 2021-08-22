
import 'react-bootstrap';
import { Link } from 'react-router-dom';
 
 const Header = () =>(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/categories">Categories</Link></li>
         </ul>
       </div>
     </div>  
   </nav>
 )
 export default Header ;
 
