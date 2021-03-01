import React from "react"
import './Resume.css'

function Resume() {
    
    return (
        <div>
            <div className = 'resume'>
                <p>Resume</p>
            </div>

            <div className = 'education'>
                <p>Education</p>
                <hr></hr>
            </div>

            <p>
				<a target="_blank" href="http://usc.edu"><img class="icon" src="https://lasnubes.fes.yorku.ca/wp-content/themes/wp-fes-theme/images/yorku-logo-small.png"></img></a><b>York University</b>
				<span class="right"><i>2019 - Present</i></span><br></br><b>Computer Science, H.BSc</b>
				<span class="right"><i>Toronto, Ontario</i></span><br></br>
						Relevant Coursework:<br></br>
			</p>
               
        </div>
    )
}

export default Resume