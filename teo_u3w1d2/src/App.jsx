import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./Components/MyNavBr";
import Welcome from "./Components/Welcome";
import Main from "./Components/Main";
import Footer from "./Components/Footeer";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Welcome />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
