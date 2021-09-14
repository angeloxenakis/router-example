import React from "react"
import { useHistory } from "react-router-dom"

export const Home = () => {
    let history = useHistory()

    const handleClick = () => {
        history.push("/card")
    }

    return(
        <div className="home-container">
                <h2>
                    This is a home page with some random info about whatever this website would be about. This is a home 
                    page with some random info about whatever this website would be about. This is a home page with some 
                    random info about whatever this website would be about. This is a home page with some random info 
                    about whatever this website would be about.
                </h2> 
                <h3 onClick={handleClick}>Click Here for Card</h3>  
        </div>
    )
}