import { useState } from "react";
import AboutFull from "./AboutFull";
import dataAbout from "./dataAbout";

function About() {
    const [openAbout, setOpenAbout] = useState(false);
    const { par1 } = dataAbout[0];

    const showAbout = () => {
        setOpenAbout(!openAbout);
    }

    return (
        <div className="about-container" id="about">
            <h2>About us</h2>
            <div>{ openAbout ? <AboutFull /> : par1.substring(0, 300) + '..' }
                <button className="btn-show-more" onClick={ () => showAbout() }>{ openAbout ? 'Show less' : 'Show more' }</button>
            </div>
        </div>
    );
}
export default About;