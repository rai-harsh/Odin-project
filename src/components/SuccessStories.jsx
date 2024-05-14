import React from "react";
import SuccessStoriesdata from "./da/SuccessStoriesdata";
import Story from "./StoryCard";
export default function(){
    const[stories, setStories ]= React.useState(SuccessStoriesdata)
    var sto = stories.map((pp)=>{
        return < Story 
            img= {pp.pfp}
            name ={pp.name}
            review={pp.review} 
            />
        
    })
    return (
        <div class="section-ss">
            <div class="SuccessStories">
            {sto}
            </div>
        <a>Read more Success stories</a>
        <div class="SupportUs">
            <h2>Support us !</h2>
            <p>The Odin Project is funded by the community. Join us in empowering learners around the globe by supporting The Odin Project!</p>
            <button class="btn1 btns">Learn more</button>
            <button class="btn2 btns">Donate now  </button>
        </div>
        </div>
    )
}