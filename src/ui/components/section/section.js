import Subtitle from "../subtitle";

const Section = (props) => {
    return (
        <div className={"section"}>
            <Subtitle data={props.data} />
        </div>
    );
};

export default Section;