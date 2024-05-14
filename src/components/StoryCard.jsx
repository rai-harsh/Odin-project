import React from "react";

export default function Story(props){
    return <div class ="story">
        <img src={props.img}/>
        <h4>{props.name}</h4>
        <p>{props.review}</p>
    </div>
}