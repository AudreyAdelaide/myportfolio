import logo from "./logo.svg";
import "./sass/App.scss";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Header />
            <div cclassName="App__content">
                <About />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
}

export default App;
