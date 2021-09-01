import './App.css';
import HomeScreen from "./screens/HomeScreen.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
          <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
