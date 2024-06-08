import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Content />
    </div>
  );
}

export default App;
