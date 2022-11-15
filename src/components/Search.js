import React from "react"

function Search ({handleChange, handleSelect}){
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search for art..." onChange = {handleChange} ></input>
            <select className="cityselect" onChange = {handleSelect}>
                <option>All</option>
                <option>Bushwick</option>
                <option>East Village</option>
                <option>Prospect Park</option>
                <option>Williamsburg</option>
            </select>
        </div>
    )
}
export default Search;
