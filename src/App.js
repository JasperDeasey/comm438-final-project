import Logo from '../src/assets/CK Logo.png'
import './App.css';
import ProjectHeader from "./ui/components/project-header";
import Section from "./ui/components/section";
import Landing from "./ui/sections/landing/landing";
import 'typeface-roboto'
import Subtitle from "./ui/components/subtitle";
import HelloFreshBox from '../src/assets/hello-fresh-box.png';
import Content from "./ui/components/content";

function App() {
  return (
    <div className="App">
        <Landing />
        <div className={"project-content-over-container"}>
            <ProjectHeader data={"Section 1"} />
            <Subtitle data={"Subtitle 1"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right:<img src={HelloFreshBox}/>}} />
            <Subtitle data={"Subtitle 2"} />
            <Content data={{right: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                left: <img src={HelloFreshBox}/> }} />
            <Subtitle data={"Subtitle 3"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right: <img src={HelloFreshBox}/> }} />

            <ProjectHeader data={"Section 2"} />
            <Subtitle data={"Subtitle 3"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right:<img src={HelloFreshBox}/>}} />
            <Subtitle data={"Subtitle 4"} />
            <Content data={{right: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                left: <img src={HelloFreshBox}/> }} />
            <Subtitle data={"Subtitle 5"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right: <img src={HelloFreshBox}/> }} />
        </div>



    </div>
  );
}

export default App;
