import './aboutMe.css';
import StandardButton from '../../shared/standardButton/StandardButton';

/**
 * Renders the "About Me" section on the home page, providing information about the developer.
 * @returns {JSX.Element} - The "About Me" section component.
 */
const AboutMe: React.FC = () => {
    return (
        <section id="aboutMe">
                <div id="aboutMe-mainPic"></div>
                <div id="aboutMe-mainContent">
                    <h2>About Me</h2>
                    <p className='mainText'>
                        I’m a junior front-end developer
                        looking for a new role in an exciting company. I
                        focus on writing accessible HTML, using modern CSS
                        practices and writing clean JavaScript. When writing
                        JavaScript code, I mostly use React, but I can adapt
                        to whatever tools are required. I’m based in London,
                        UK, but I’m happy working remotely and have experience
                        in remote teams. When I’m not coding, you’ll find me
                        outdoors. I love being out in nature whether that’s
                        going for a walk, run or cycling. I’d love you to check
                        out my work.
                    </p>
                    <StandardButton value='GO TO PORTFOLIO' mode='lightButton'/>
                </div>
        </section>
    )
}
export default AboutMe;