import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from "./screens/HomeScreen.js"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./screens/Login";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { auths } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auths.onAuthStateChanged(userAuth => {
      if (userAuth)
      {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      }
      else{
        dispatch(logout());
      }
    })

    return unSubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/">
          <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
