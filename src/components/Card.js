import React from "react"
import { useHistory } from "react-router-dom"

export const Card = () => {
    let history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    return(
        <div className="card">
            <div className="card-block">
                <h2>This is a card</h2>
            </div>
            <div className="card-block">
                <h3>It would porbably have some info here</h3>
            </div>
            <div className="card-footer">
                <h4>...and some sort of footer here</h4>
                <h5 onClick={handleClick}>Click Here for Home Page</h5>
            </div>      
        </div>
    )
}