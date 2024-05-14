import React from "react"

export default function NavBar(){
    var toggled = (window.innerWidth < 750)?"Navbar off toggle":"Navbar on     toggle"

    const[he,setHe]=React.useState(false)
    React.useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 750)
            {
                setHe(true)
            }else{
                setHe(false)
            }
            
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <nav>
            <div class={toggled}>
                <span class="nav-item">
                < img class="odin " src="./icons/odin.png" alt="odin" /> 
                <a class=" icon-text">THE ODIN PROJEXT</a>  
                </span>
                <a class="nav-item" >   All Paths  </a>
                <a class="nav-item" >   About      </a>
                <a class="nav-item" >   community  </a>
                <a class="nav-item" >   Support us </a>
                <a class="nav-item" >   Sign-in    </a>
                <span class="material-symbols-outlined">light_mode</span>
                <button id="sex"class="nav-item" >Get Started</button>
            </div>
            
        </nav>
    )
}