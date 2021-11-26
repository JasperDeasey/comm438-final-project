import "./project-header.css";

const ProjectHeader = (props) => {
    return (
        <div className={"heading-container"}>
            <div className={"project-header"}>
                <h2 className={"project-header-h2"}>
                    <span>{props.data}</span>
                </h2>
                <div className={"projectheader"}></div>
            </div>
        </div>
    );
};

export default ProjectHeader;