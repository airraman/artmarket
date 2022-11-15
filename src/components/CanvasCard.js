import React, {useState} from "react"

function CanvasCard({piece, handleReveal}){
    

    const [clicked, setClicked] = useState(false)
    const [isPlus, setIsPlus] = useState(true)
    const [favorited, setFavorited] = useState(false)
    const [sold, setIsSold] = useState(true)

    function handleReveal(){
        setIsSold(!sold)
        alert(`You will be directed to make an appointment with the ${piece.firstname + " " + piece.lastname}`)
        
    }

    function handleEnlarge(){
        setIsPlus(!isPlus)
        
    }

    function handleFavorite(){
        setFavorited(!favorited)
    }
    
    return(
        <div className={isPlus ? "artcard" : "artcardplus"}  >
            <figcaption className={sold ? "sold" :"notsold" }>{sold ? "AVAILABLE" :"SOLD"} </figcaption>
            <img  src = {piece.url} onClick ={handleEnlarge} />
            <div>
                <h2>{piece.title}</h2>
                <p>Located In: {piece.location}</p>
                <p>${piece.price}</p>
                <div className = {isPlus ? "noshow" : "show"}>
                    <p>{piece.description}</p>
                    <p>Materials: {piece.medium}</p>
                </div>
            </div>
            <div className="views">
                    <button onClick = {handleFavorite}>🔖{favorited ? "Favorited" : "Favorite"} </button>
                    <button onClick ={handleReveal} className = {isPlus ? "noshowbutton" : "showbutton"} >Purchase</button>
                </div>
            
        </div>
    )
}

export default CanvasCard;

