import React from "react"
import CourseCards from "./courseCards"
import coursesData from "./da/CoursesData"
export default function Courses(){
   const [course,setCourse]= React.useState(coursesData)
    var toBeRendered = coursesData.map((card)=>{
        return < CourseCards
                image = {card.img}
                name = {card.courseName}
                />
    })
    return(
        <div class= "course-section">
            <h1>Learn everything you need to know</h1>
            <div class="course-container">
            {toBeRendered}
            </div>
            <button>Explore curriculum</button>
        </div>
        
    )
}