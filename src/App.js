import Logo from '../src/assets/CK Logo.png'
import './App.css';
import ProjectHeader from "./ui/components/project-header";
import Section from "./ui/components/section";
import Landing from "./ui/sections/landing/landing";
import 'typeface-roboto'
import Subtitle from "./ui/components/subtitle";
import HelloFreshBox from '../src/assets/hello-fresh-box.png';
import Content from "./ui/components/content";
import AboutUsPageWireFrame from '../src/assets/AboutUsPageWireFrame.png';
import FAQPageWireFrame from '../src/assets/FAQPageWireFrame.png';
import MenuPageWireFrame from '../src/assets/MenuPageWireFrame.png';
import ProfilePageWireFrame from '../src/assets/ProfilePageWireFrame.png';
import WireFlow from '../src/assets/WireFlow.png'

function App() {
  return (
    <div className="App">
        <Landing />
        <div className={"project-content-over-container"}>
            <ProjectHeader data={{title:"Section 1",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut."}} />
            <Subtitle data={"Subtitle 1"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right:<img className={"wireframe-img"} src={HelloFreshBox}/>}} />
            <Subtitle data={"Subtitle 2"} />
            <Content data={{right: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                left: <img className={"wireframe-img"} src={HelloFreshBox}/> }} />
            <Subtitle data={"Subtitle 3"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right: <img className={"wireframe-img"} src={HelloFreshBox}/> }} />


            <ProjectHeader data={{title:"Section 2",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut."}} />
            <Subtitle data={"Subtitle 3"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right:<img className={"wireframe-img"} src={HelloFreshBox}/>}} />
            <Subtitle data={"Subtitle 4"} />
            <Content data={{right: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                 }} />
            <Subtitle data={"Subtitle 5"} />
            <Content data={{left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Arcu bibendum at varius vel pharetra vel turpis. Donec pretium vulputate sapien nec sagittis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ultrices neque ornare aenean euismod. Quisque non tellus orci ac auctor augue mauris augue. Amet justo donec enim diam vulputate ut pharetra sit. Neque egestas congue quisque egestas diam. Elementum facilisis leo vel fringilla est ullamcorper eget. Et odio pellentesque diam volutpat commodo. Egestas egestas fringilla phasellus faucibus scelerisque. Amet consectetur adipiscing elit ut.",
                right: <img className={"wireframe-img"} src={HelloFreshBox}/> }} />



            {/*---------------- WIREFRAMES & WIREFLOWS SECTION ----------------*/}

            <ProjectHeader data={{title:"Wireframes & Wireflows",
                text:"Culture Kits’ website will be built with the user experience in mind, ensuring that using and navigating the site will be a seamless experience for all types of users. We aimed to keep the technology minimal so that users can focus on using our service - so they can connect, or re-connect, with culture through creating authentic, delicious food from our meal kits."}} />
            <Subtitle data={"About Us (Home) Page Wireframe"} />
            <div className={"content-container"}>
                <div className={"content-container-inner"}>
                    <div className={"content-left"}>
                        <div>
                            <p>The first page users will see is the About Us page, which is also the website’s home page.</p>
                            <p>The About Us page explains who we are, what we provide, and who we aim to serve.</p>
                            <p>From this page, users can log in or sign up through the buttons at the bottom of the screen, or use the header to navigate to the Menu Page, Selection Page (which shows pricing), and the FAQ page.</p>
                            <p>Finally, selecting the button at the top-right of the screen will direct users to the Profile Page if they are logged in, or the Log In page if they are not</p>
                        </div>,
                    </div>
                    <div className={"content-left"}>
                        <img className="wireframe-img" src={AboutUsPageWireFrame}/>
                    </div>
                </div>
            </div>
            <Subtitle data={"Menu Page Wireframe"} />
            <Content data={{right:
                    <div>
                        <p>The page that users will most frequently visit is the Menu Page.</p>
                        <p>The Menu Page displays all of the options available for the week, and allows users to select the meals they want delivered to their house. The page has many features, including:</p>
                        <ul>
                            <li>A search bar, to search for specific dished available that week.</li>
                            <li>A filter, allowing users to filter by specific cultures they hope to cook food from.</li>
                            <li>A like button, enabling users to save the recipes for future use.</li>
                        </ul>
                    </div>,
            left: <img className={"wireframe-img"} src={MenuPageWireFrame}/>}} />
            <Subtitle data={"Profile Page Wireframe"} />
            <Content data={{left: <div><p>The Profile Page allows users to change aspects of their profile, including their payment and address, delivery settings, subscription settings, and more.</p>
                    <p>Also within the Profile Page is information about the user’s previous orders and the recipes that they ‘liked’ to find later.</p>
                </div>,
                right: <img className={"wireframe-img"} src={ProfilePageWireFrame}/> }} />
            <Subtitle data={"Frequently Asked Questions Page Wireframe"} />
            <Content data={{right: "The Frequently Asked Questions page hosts questions that people commonly have about our service. The page aims to solve user issues before they become larger problems, and strain the human support team of Culture Kits.",
                left: <img className="wireframe-img" src={FAQPageWireFrame}/> }} />
            <Subtitle data={"Log In/Sign-Up Wireflow"} />
            <div className={"wireflow-text-container"}>
                <div className={"wireflow-text"}>
                    <p>This wireflow explains the login/sign-up process.</p>
                    <p>In this process, the user begins on the login page. If they have an account, they login directly to the menu page.</p>
                    <p>If the user does not have an account, they are directed to the Sign-Up Page, where they create an account. They then choose their subscription options on the Selection Page, then enter their shipping and payment information on the next page. After the information has been added, they are directed to the Menu Page, where they can select their meals for the week.</p>
                </div>
            </div>
            <div className={"wireflow-container"}>
                <img className={"wireflow-img"} src={WireFlow}/>
            </div>

        </div>



    </div>
  );
}

export default App;
