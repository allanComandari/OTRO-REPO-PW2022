import { Link } from "react-router-dom";

const NavBar = () => {
    return(

   
        <nav>
            <ul>
               <li>  
                  <Link to="/">Inicio</Link>
               </li> 

               <li>  
                  <Link to="/normas">Normas</Link>
               </li>  

               <li>  
                  <Link to="/publicar">Publicar</Link>
               </li>
            </ul>

            <div className="buscar">
                  <input type={Text} placeholder="buscar" required></input>   
                        <div class="btn">
                           <i class="fas fa-search icon"></i>
                        </div>
            </div>
        </nav>

        
    );
}

export default NavBar;