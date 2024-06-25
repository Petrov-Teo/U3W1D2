import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./Components/MyNavBr";
import Welcome from "./Components/Welcome";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Welcome />
      <Main />
    </div>
  );
}

export default App;
