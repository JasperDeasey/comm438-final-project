import "./project-header.css";

const ProjectHeader = (props) => {
    return (
        <div className={"heading-container"}>
            <div className={"project-header"}>
                <h2 className={"project-header-h2"}>
                    <span>{props.data.title}</span>
                </h2>
                <div className={"content-left"}>
                    <div className={"project-header-text"}>
                        {props.data.text}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectHeader;