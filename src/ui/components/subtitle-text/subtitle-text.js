import "./subtitle-text.css";

const Content = (props) => {
    return (
        <div className={"subtitle-text-container"}>
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