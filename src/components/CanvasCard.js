import React from "react"

function CanvasCard({piece}){
    return(
        <div className="artcard">
            <img src = {piece.URL}/>
            <div>
                <h2>{piece.Title}</h2>
                <p>Located In: {piece.Location}</p>
                <p>${piece.Price}</p>
            </div>
            <button>Purchase</button>
        </div>
    )
}

export default CanvasCard;

