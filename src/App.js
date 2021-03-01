import React from "react";

import Header from "./components/Header.js"
import SocialMedia from "./components/SocialMedia.js";
import Resume from "./components/Resume/Resume.js"
import Footer from "./components/Footer.js";
import './components/components.css'
import './App.css'




function App() {
    return (
       
            <div  >
                <Header />
                <SocialMedia />
                <Resume />
                <Footer />
            </div>
 
    )
}

export default App