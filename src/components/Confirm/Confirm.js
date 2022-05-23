import "./Confirm.scss";

export function Confirm(props) {
    return (
        props.show ? <div id="confirm-background">
            <div id="confirm-box">
                <h1>{props.title}</h1>
                <div>
                    <button className="yes" onClick={props.clickYes}>Yes</button>
                    <button className="no" onClick={props.clickNo}>No</button>
                </div>
            </div>
        </div> : null
    )
}