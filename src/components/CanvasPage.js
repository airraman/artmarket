import React, {useEffect, useState} from "react"
import NewCanvasForm from "./NewCanvasForm"
import CanvasList from "./CanvasList"
import Search from "./Search"
import SaveList from "./SaveList"


function CanvasPage(){

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("All")

    function handleChange(event){
        setSearch(event.target.value)
    }

    function handleSelect(event){
        console.log(event.target.value)
        setSelect(event.target.value)
        console.log(select)
    }


    const filteredArt = data.filter((art) => {
        if (search === "") {return true} 

        else return  art.description.toLowerCase().includes(search)
    }).filter((artLocation) => {

        if (select === "All") {return true}

        else return artLocation.location === select
    })

    useEffect(() => {
        fetch("http://localhost:3001/art")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return(
        <div>
            <Search handleChange={handleChange} handleSelect = {handleSelect}/>
            <NewCanvasForm />
            <CanvasList artists={filteredArt}  />
            <SaveList />
        </div>
    )
}

export default CanvasPage