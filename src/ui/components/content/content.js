import "./content.css";
import HelloFreshBox from "../../../assets/hello-fresh-box.png";

const Content = (props) => {
    return (
        <div className={"content-container"}>
            <div className={"content-container-inner"}>
                <div className={"content-left"}>
                    {props.data.left}
                </div>
                <div className={"content-left"}>
                    {props.data.right}
                </div>
            </div>
        </div>
    );
};

export default Content;