import { Link } from 'react-router-dom';
import logo from './assets/imagenes/logo.png'
const Header = () => {
    return (
        <header>

            <div className="logo">
               <Link to="/"> <img src={logo}/> </Link> 
            </div>

          
        <h2 className='nombre-header'>TRADE OFF SIVAR</h2>
           
            
        </header>

    )
}

export default Header;