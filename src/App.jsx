import Expressions from "./components/Expressions";
import Footer from "./components/Footer"
import Greet from "./components/Greet"
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import Lists from "./components/LISTS/Lists";
import Mapping from "./components/LISTS/Mapping";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
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
      <Mapping/>
    </section>
  );

}

export default App