import "./Loader.css";

export function Loader(props) {
    return (
        <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-text">{props.text}</div>
        </div>
    )
}