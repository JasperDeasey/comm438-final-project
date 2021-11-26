import "./subtitle.css";

const Subtitle = (props) => {
    return (
        <div className={"subtitle-container"}>
            <div className={"subtitle"}>
                <h2 className={"subtitle-h2"}>
                    <span>{props.data}</span>
                </h2>
            </div>
        </div>
    );
};

export default Subtitle;