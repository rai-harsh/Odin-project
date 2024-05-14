import React from "react";

export default function Feat(prop){
    return(
        <div class="feature">
            <img src={'./icons/'+prop.heading+'.jpg' }/>
            <h2>{prop.heading}</h2>
            <p>{prop.description}</p>
        </div>
    )
}