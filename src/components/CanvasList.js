import React from "react"
import CanvasCard from "./CanvasCard";

function CanvasList({artists}){
    return(
        <div className="cardcontainer">
             {artists.map((piece) => {
            return <CanvasCard piece = {piece} />
        })}
        </div>
    )
}

export default CanvasList;

