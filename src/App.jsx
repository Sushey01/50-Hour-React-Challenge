import Counter from "./components/Challenges1/Counter";
import Cart from "./components/Day4ConditionalRendering/Cart";
import GreetingConditional from "./components/Day4ConditionalRendering/GreetingConditional";
import Password from "./components/Day4ConditionalRendering/Password";
import UserStatus from "./components/Day4ConditionalRendering/UserStatus";
import Weather from "./components/Day4ConditionalRendering/Weather";
import ProfileCard from "./components/Day5_InLineStyles__ICONS/ProfileCard";
import StyleCard from "./components/Day5_InLineStyles__ICONS/StyleCard";
import Styles from "./components/Day5_InLineStyles__ICONS/Styles";
import ContentCopy from "./components/Day5EventsHandling/ContentCopy";
import Events from "./components/Day5EventsHandling/Events";
import CountState from "./components/Day6StateAndHooks/CountState";
import FriendsStateArray from "./components/Day6StateAndHooks/FriendsStateArray";
import Expressions from "./components/Expressions";
import Footer from "./components/Footer"
import Greet from "./components/Greet"
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import Lists from "./components/LISTS/Lists";
import Mapping from "./components/LISTS/Mapping";
import ProductList from "./components/LISTS/ProductList";
import UserList from "./components/LISTS/UserList";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
import Person from "./components/PROPS_DAY3/Person";
import Product from "./components/PROPS_DAY3/Product";
import Properties from "./components/PROPS_DAY3/Properties";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () =>{
  return (
    <section id="section">
      {/* <div>
        <h1>My Website</h1>
        <article>
          <h1>Welcome to React</h1>
          <p className="text">Paragraph Content </p>
        </article>
      </div> */}
      {/* <WelcomeMessage/>
      <JSXRules/>
      <Expressions/> */}
      {/* <Greeting/>
      <ProductInfo/> */}
      {/* <Lists/> */}
      {/* <Mapping/> */}
      {/* <UserList/>
      <ProductList/> */}
      {/* <Properties/> */}
      {/* <Person name="Shekhar" age={20}/>
      <Product name="Iphone" price={2000}/> */}
      
      {/* iF I dont pass the isValid prop true then it will be default false so Invalid will display. */}
      {/* <Password /> */}

      {/* But if i pass the isValid = true then it shows valid password. */}
      {/* <Password isValid={true}/> */}

      {/* <Cart/> */}
     

     <div>
      <h1>Conditional Rendering in REACT</h1>

      {/* WEATHER COMPPONENT */}
      {/* <Weather istemperature={10}/>
      <Weather istemperature={20}/>
      <Weather istemperature={30}/> */}
      {/* <Weather/> */}


      {/* UserStatus component */}
      <UserStatus loggedIn={true} isAdmin={false}/>



      {/* Greeting component */}
      {/* <Greeting timeOfDay="morning"/>
      <Greeting timeOfDay="afternoon"/>
      <Greeting/> */}
      <GreetingConditional timeOfDay="morning"/>



      {/* Inline Styles */}
      {/* <Styles />
      <StyleCard/>
      <ProfileCard/>
      <Events/> */}
      <ContentCopy/>
      {/* <CountState/> */}
      <FriendsStateArray/>
      {/* <Counter/> */}
     </div>

    </section>
  );

}

export default App