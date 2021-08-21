
import 'react-bootstrap';
import { Link } from 'react-router-dom';
 
 const Header = () =>(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/categories">Categories</Link></li>
         </ul>
       </div>
     </div>  
   </nav>
 )
 export default Header ;
 
