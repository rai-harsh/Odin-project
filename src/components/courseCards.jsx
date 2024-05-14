import React from "react"
export default function CourseCards(props){
    
    return(
        <div class="CourseCard">
            <img src= {props.image}/>
            <h2>{props.name}</h2>
        </div>
    )
}