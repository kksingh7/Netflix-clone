import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth){
                dispatch(
                    login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                    })
                );
            }else{
              //logged out  
              dispatch(logout());
            }
        })

        return unsubscribe;
    }, [dispatch])

    return ( 
        <div className = "app" >
            {!user ?(
                <LoginScreen />
            ):(
                <Router>
                    <Switch>
                        <Route path = '/profile'>
                            <ProfileScreen />
                        </Route>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>      
                </Router>
            )}
        </div>
    );
}

export default App;