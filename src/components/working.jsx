import React from "react"
import Feat from './Feat'

export default function Working(){
    return(
        
        <div class="working-container">
            <div class="how-it-works">
                <h1>How it works</h1>
                <p>This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.</p>
            </div>
            <div class="features">
                < Feat 
                heading="Learn"
                description="Learn from a curriculum with the best curated online tutorials, blogs, and courses"
                />
                < Feat 
                heading="Build"
                description="Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites."
                />
                < Feat 
                heading="Connect"
                description="You're not alone. Learn and get help from our friendly community of beginner and experienced developers."
                />
                
            </div>
        </div>
        
    )
}