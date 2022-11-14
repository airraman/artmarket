import React, {useEffect, useState} from "react"
import NewCanvasForm from "./NewCanvasForm"
import CanvasList from "./CanvasList"
import Search from "./Search"


function CanvasPage(){

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")

    function handleChange(event){
        setSearch(event.target.value)
    }

    function handleSelect(event){
        setSelect(event.target.value)
    }


    const filteredArt = data.filter((art) => {
        if (search === "") return true

        else return art.Title.includes(search) 
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
            <CanvasList artists={filteredArt} />
        </div>
    )
}

export default CanvasPage