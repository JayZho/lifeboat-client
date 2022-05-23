import { useEffect, useMemo, useState } from "react"
import { GiZeusSword } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { characters, charToImage, charStats, heOrShe } from "../../gameSet";
import './ShowSetup.scss';


function FirstPage(props) {


    return (
        <div id="first-section" className="row first">
            <div className="stack hate">
                <div className="image-area">
                    <GiZeusSword color="green" />
                    <img src={charToImage[props.hate]} alt="" />
                    <h3 className="colored">{characters[props.hate]}</h3>
                </div>
                {props.hate === props.me ?
                    <h4>Oops...a manhater</h4> :
                    <h4>+ <span>{charStats[props.hate]["health"]}</span> point if {heOrShe[props.hate]} dies</h4>
                }


            </div>
            <div className="stack me">
                <div className="image-area">
                    <img src={charToImage[props.me]} alt="" />
                    <h2>{characters[props.me]}</h2>
                </div>
                <div className="description">
                    <div className="row">
                        <h4>Health: <span>{charStats[props.me]["health"]}</span> </h4>
                        <h4>Survival: <span>{charStats[props.me]["points"]}</span> </h4>
                    </div>
                    <h4 className="skill">"{charStats[props.me]["skill"]}."</h4>
                </div>
            </div>
            <div className="stack like">
                <div className="image-area">
                    <FaRegHeart className="top-left" color="red" />
                    <FaRegHeart className="bottom-right" color="red" />
                    <img src={charToImage[props.like]} alt="" />
                    <h3 className="colored">{characters[props.like]}</h3>
                </div>
                <h4>+ <span>{charStats[props.like]["points"]}</span> points if {heOrShe[props.like]} survives</h4>
            </div>
        </div >
    )
}

function SecondPage(props) {
    return (
        <div id="third-section">
            {props.players.map((p) => <div className="character-image">
                <img src={charToImage[p.role]} alt="" />
                <h3 className="playerNames">{p.name}:</h3>
                <h3>{characters[p.role]}</h3>
            </div>)}
        </div>

    )
}

export function ShowSetup(props) {
    const [step, setStep] = useState(1);
    const [btnText, setBtnText] = useState("Next");
    const myself = useMemo(() => {
        const id = sessionStorage.getItem("playerID");
        return props.players.filter((p) => p.id === id)[0];
    });
    const hints = useMemo(() => {
        // if a manhater
        if (myself.role === myself.hate) {
            if (myself.like === myself.role) {
                return [
                    "Survive yourself",
                    "Let everyone else die"
                ];
            } else {
                return [
                    "Survive yourself",
                    "Help " + characters[myself.like] + " survive",
                    "Let everyone else die",
                ]
            }
        } else {
            if (myself.role === myself.like) { // you love yourself, hate others
                return [
                    "Survive yourself",
                    "Let " + characters[myself.hate] + " die",
                ];
            } else if (myself.hate === myself.like) { // you love and hate the same person
                const health = charStats[myself.hate]["health"];
                const points = charStats[myself.hate]["points"];
                const himHer = heOrShe[myself.hate] === "he" ? "him" : "her";
                let secHint;
                if (health > points) {
                    secHint = "try to let " + himHer + " die to score more points";
                } else if (health < points) {
                    secHint = "try to help" + himHer + " survive to socre more points";
                } else {
                    secHint = "you get the same number of points from either his survival or death";
                }
                return [
                    "Survive yourself",
                    "You love & hate " + characters[myself.like] + ", " + secHint,
                ]
            } else { // you love one person and hate another
                return [
                    "Survive yourself",
                    "Help " + characters[myself.like] + " survive",
                    "Let " + characters[myself.hate] + " die",
                ]
            }
        }
    }, []);

    useEffect(() => {
        console.log(props.players);
        console.log(hints)
    });

    const nextStep = () => {
        // show hint text
        if (step === 1) {
            document.getElementById("first-section").classList.add("small");
            document.getElementById("hint-box").classList.remove("invisible")
        } else if (step === 2) {
            document.getElementById("tophalf-container").classList.add("small");
            setBtnText("Start the Game");
        } else if (step === 3) {
            setBtnText("Waiting for everyone else to start...");
            document.getElementById("next-setup").classList.add("unclickable");
        } else {
            return;
        }
        setStep(step + 1);
    }

    return (
        <div id="show-setup" className="fullCover">
            <div id="tophalf-container">
                <FirstPage hate={myself.hate} like={myself.like} me={myself.role} />
                {<div className="invisible" id="hint-box">
                    <h2>Hints:</h2>
                    <ul>
                        {hints && hints.map((h) => <li>{h}</li>)}
                    </ul>
                </div>}
            </div>
            {/* <hr /> */}
            {step > 2 && <SecondPage players={props.players} />}
            <h2 id="next-setup" onClick={nextStep}>{btnText} {step < 4 && <HiArrowRight color="0xffffff" />}</h2>

        </div>
    )
}