import "bootstrap/dist/css/bootstrap.min.css";
import "./IntroPage.css";

export function IntroPage(props) {
    return (
        <div>
            <button class="btn btn-primary join" onclick={props.nextPage("join")}>Join</button>
            <button class="btn btn-primary create" onclick={props.nextPage("create")}>Create</button>
        </div>
    )
}