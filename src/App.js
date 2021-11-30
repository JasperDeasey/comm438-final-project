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
import InternationalStudentImg from '../src/assets/international_student_img.png'
import MealKitImg from '../src/assets/MealKitImg.png'

function App() {
  return (
    <div className="App">
        <Landing />

        <div className={"project-content-over-container"}>

            {/*---------------- PROBLEM & USER IDENTIFICATION----------------*/}

            <ProjectHeader data={{title:"PROBLEM & SOLUTION",
            text:"Current meal kit providers leave a large market gap for Culture Kits to fill."}} />
            <Subtitle data={"THE PROBLEM"} />
            <div className={"just-text-container"}>
                <div className={"just-text"}>
                    <img className={"wireframe-img"} src={InternationalStudentImg} align={"right"}/>
                    <p>Thousands of international students fly millions of miles around the world to enrol in various prestigious educational institutions, one of the top ones being UBC. Incoming students often can have difficulties settling in and university can get stressful as the semester progresses. Typically students like to eat food that they are used to eating back home but due to time and budgetary constraints during the semester they either order food in or cook quick/easy meals.</p>
                    <p>Another issue new students face is their lack of geographic knowledge, they either overspend or compensate with cheaper ingredients when grocery shopping as they don’t know where to buy specific groceries that they want. Services like HelloFresh partly provide the solution to this problem but do not fully address student needs as it offers far too generalised options. An example of this could be an international student wanting to eat their respective cuisine but there are too many barriers to doing so: buying the required groceries may mean excess ingredients are leftover; they may be unable to order food as it is too expensive; they may have specific dietary restrictions that won’t allow them to eat out at restaurants; they may have to travel long distances to eat their desired food; and they may not have the knowledge to cook specific dishes.</p>
                </div>
            </div>
            <Subtitle data={"OUR SOLUTION"} />
            <div className={"just-text-container"}>
                <div className={"just-text"}>
                    <img className={"wireframe-img"} src={MealKitImg} align={"left"}/>
                    <p>The proposed product would be a meal prep service that categorises dishes based on cuisine, gathering ingredients from culturally appropriate grocery stores, packaging them with recipes and then sending them to consumers. Each customer would create an account and would order 1-3 meals per week (differing prices based on how many meals). The key differing feature would be the sorting based on culture, targeting the diverse nature of UBC as a community.</p>
                    <p>The lack of differing cuisine options provided by existing food prep services creates a gap in the market for culturally specific meal options. In addition to that, the difficulty of finding particular ingredients would be eliminated entirely as they are directly shipped to the door. This method of delivery is extremely convenient for customers and due to the current global state it seems even more appropriate. This proposed solution can also have other external benefits like reducing food wastage as each meal prep set only has enough ingredients for one meal.</p>
                    <p>While meal prep services already exist where our solution differs is in terms of authenticity. Every student has eaten cheap unflavoured Chinese takeout when pressed for time, but the low quality ingredients leaves the buyer with a homesick feeling - even high-quality restaurants fail to connect people with the culture the same as creating the dish themselves does. Competitors like “Hello Fresh”, which allow people to create meals themselves, often use cheap ingredients and have generic dishes whereas we will use cuisine specific ingredients by establishing relationships with existing international supermarket chains. These provide us with ethnically accurate ingredients, reminding our customers of home with each bite.</p>
                </div>
            </div>



            {/*---------------- GO-TO-MARKET STRATEGY ----------------*/}
            <ProjectHeader data={{title:"WHY WE'LL SUCCEED",
                text:"Culture Kits will succeed through mass marketing, a competitive pricing strategy, and a market that wants our service."}} />
            <Subtitle data={"Aggressive Marketing"} />
            <div className={"just-text-container"}>
                <div className={"just-text"}>
                    <p>At product launch several factors will have to be considered to ensure a successful introduction to the market. As mentioned previously the target audience are students/young adults and the implementation of a social media focused marketing strategy would be ideal as the majority of people in that age range have social media. Using online platforms would allow marketing costs to remain low while having a large outreach in the targeted market sector. To incentivise longer term enrollment in the prep services program discounts can be offered based on how long the customer signs up for. When potential customers think about signing up we can offer a promotional free week of meals if they sign up for two weeks worth of meals, if consumers do not like the food they can cancel within the first week with no charge. This would also encourage consumers who use competitors' meal prep kits to switch to Culture Kits as the first week is free and the consumer would not incur any cost for trying.</p>
                </div>
            </div>

            <Subtitle data={"Attractive Pricing"} />
            <div className={"just-text-container"}>
                <div className={"just-text"}>
                    <p>In terms of revenue model a subscription based model makes the most sense, consumers can choose a certain number of meals per week. Consumers would pay when they make the selection on what prep kit they want. When deciding price, cost of ingredients, shipping, handling, packaging and import/export fees will need to be taken into account. Competitors such as Hello Fresh currently charge $9.69-$11.49 per meal (excluding shipping) so a price set around that range would be ideal.</p>
                </div>
            </div>

            <Subtitle data={"Large, Unserved Market"} />
            <div className={"just-text-container"}>
                <div className={"just-text"}>
                    <p>Culture kits has chosen to target their marketing at millennials, as they are the most receptive audience. Offering a variety of ethnic and culturally appropriate recipes appeals to the foodie culture and connects people to their home countries. We would be focusing on young adults/Students that have moved away from their home countries. Our total addressable market would be all the millennials who are interested in trying ethnic specific food, we would be started by expanding throughout major towns and cities in Canada. At this point there are 530,540 International students in the country. We would be hoping to target 10% (53,000) of all international students in Canada which brings our TAM to approximately $28 billion.</p>
                    <h5 align={"center"}>TAM = 530,540 * 53,000=$28,118,620,000</h5>
                </div>
            </div>

            <Subtitle data={"Key Competitors"} />
            <div className={"just-text-container"}>
                <div className={"just-text"}>
                    <p>Hello Fresh would be the main competitor as they also offer meal prep services; however, there are also several indirect competitors like UberEats or Doordash who may attract some of the other market share as while they offer slightly different services they still target some of the same audience. Culture Kits may have some similar features to these existing platforms but where it differentiates itself is in its tailored food options and relatively affordable pricing.</p>
                </div>
            </div>


            {/*---------------- WIREFRAMES & WIREFLOWS  ----------------*/}

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
                            <p>Finally, selecting the button at the top-right of the screen will direct users to the Profile Page if they are logged in, or the Log In page if they are not signed in.</p>
                        </div>
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
            <div className={"just-text-container"}>
                <div className={"just-text"}>
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
