import { Link } from "react-router-dom";

const Categorias = () =>{
    return(
        <div className="categorias">
            
            <div className="sidebar">
            <h2> Categorias </h2>

                <ul>
                    <li> <Link to="/" className="cat-todo"> Todo </Link></li>
                    <li> <Link to="/" className="cat-blusas"> Blusas </Link></li>
                    <li> <Link to="/" className="cat-jog"> Joggers </Link> </li>
                    <li> <Link to="/" className="cat-pant"> Pantalones </Link> </li>
                    <li> <Link to="/" className="cat-jeans"> Jeans </Link></li>
                    <li> <Link to="/" className="cat-cami"> Camisetas </Link></li>
                 </ul>   
            </div>
            
        </div>
    )
}

export default Categorias;