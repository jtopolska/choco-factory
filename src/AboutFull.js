import dataAbout from "./dataAbout";

function AboutFull() {
    const {par1, par2, par3, par4 } = dataAbout[0];

    return (
        <div className="about-full-container">
            <p>{ par1 }</p>
            <p>{ par2 }</p>
            <p>{ par3 }</p>
            <p>{ par4 }</p>
        </div>
    )
}
export default AboutFull;