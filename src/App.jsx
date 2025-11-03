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
      <Person name="Shekhar" age={20}/>
      <Product name="Iphone" price={2000}/>
    </section>
  );

}

export default App