import "./landing.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React from "react";
// import "react-slideshow-image/dist/styles.css";
import '../../../../node_modules/animate.css/animate.css';
import TextTransition, { presets } from "react-text-transition";
import ScrollAnimation from "react-animate-on-scroll";
import Typist from "react-typist";
import { Link } from "@material-ui/core";
import Logo from "../../../assets/CK Logo.png";
import 'typeface-roboto'

const TEXTS = [
    "A Cultural Experience",
    "Based in Vancouver, BC",
    "Created by Group 2",
    "For Management of Information Systems' Final Project",
    "Helping People Reconnect With Culture Through Food"
];

const Landing = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            4000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={"landing"}>
            <div className={"landing-text"}>
                <p className={"introduction"}>
                    <ScrollAnimation
                        animateIn="animate__fadeIn"
                        animateOut="animate__fadeOut"
                        offset={200}
                        delay={500}
                        animateOnce={true}
                    >
                        <img className={"logo-image"} src={Logo} />
                    </ScrollAnimation>
                    <br/>
                    <div className={"culture-kits"}>
                        <ScrollAnimation
                            animateIn="animate__fadeIn"
                            animateOut="animate__fadeOut"
                            offset={200}
                            delay={1500}
                            animateOnce={true}
                        >
                            Culture Kits
                        </ScrollAnimation>
                    </div>
                </p>
            <br/>
                <ScrollAnimation
                    animateIn="animate__fadeIn"
                    animateOut="animate__fadeOut"
                    offset={200}
                    delay={3500}
                    animateOnce={true}
                >
                    <div className={"me"}>
                        <p className={"changing-introduction"}>
                            <TextTransition
                                className={"changing-text"}
                                text={TEXTS[index % TEXTS.length]}
                                springConfig={presets.default}
                                inline={true}
                                delay={3500}
                            />
                        </p>
                    </div>
                </ScrollAnimation>
                <div className={"spacer"} />
                <div className={"bounce"}>
                    <ScrollAnimation
                        animateIn="fadeIn"
                        offset={0}
                        delay={6000}
                        animateOnce={true}
                    >
                        <KeyboardArrowDownIcon className={"down-icon"} fontSize="large" />
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default Landing;