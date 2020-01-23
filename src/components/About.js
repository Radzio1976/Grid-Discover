import React from 'react';
import AboutImage from '../images/about-image.jpg';

class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="about-image"><img
                    src={AboutImage}
                    alt=""></img></div>
                <div className="about-text">
                    <h1>Hello, I am Gia Coleman!</h1>
                    <p>Aenean vel pulvinar lorem, id sodales est. Phasellus a molestie dui. Maecenas consequat vehicula erat
                        in porttitor. Etiam sed efficitur mauris, eu pharetra tellus. Donec volutpat purus tortor, eget
                        fringilla ipsum convallis et. Pellentesque et felis ut nisi dapibus tempor. Curabitur efficitur nisl
                    nunc. Nunc feugiat mi tellus, a feugiat enim consequat ac.</p>
                </div>
            </section>
        )
    }
}

export default About;