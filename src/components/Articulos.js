const Characters = ({characters=[]}) =>{

    return(
        <div className="row m-4">
              {
                 characters.map((item, index) => (
                    <div key={index} className="col mb-2">
                        <div className="card" style={{maxWidth:"250px"}}>
                            <img src={item.image} alt="" />
                            <div className="card-boby"> 
                                <h5 className="card-title"> {item.name}</h5>
                            </div>
                            <hr/>
                            <p>location: {item.location.name}</p>
                            <p>species: {item.species}</p>
                         </div>   
                    </div>
                 ))
                }
                
        </div>
    )
}

export default Characters;