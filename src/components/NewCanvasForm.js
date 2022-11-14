import React from "react"

function NewCanvasForm(){
    return(
        <div className="artform">
            <form>
                <input type = "text" placeholder="title"/>
                <input type = "text" placeholder="price"/>
                <input type = "text" placeholder="market"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewCanvasForm; 
