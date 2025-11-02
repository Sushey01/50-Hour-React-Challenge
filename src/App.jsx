import Footer from "./components/Footer"
import Greet from "./components/Greet"
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
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
      <WelcomeMessage/>
      <JSXRules/>
    </section>
  );

}

export default App