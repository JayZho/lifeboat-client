import "./MsgBox.scss";

export function MsgBox(props) {

    return (
        <div id="msg-box">
            {props.children}
            <button onClick={props.onfinish} id="msg-box-btn">OK</button>
        </div>
    )
}