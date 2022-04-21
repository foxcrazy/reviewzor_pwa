import React from 'react';
import './App.scss';
import {BrowserRouter, useRoutes} from 'react-router-dom';
import {StartScreen} from "./views/StartScreen";
import {RegisterScreen} from "./views/RegisterScreen";
import {LoginScreen} from "./views/LoginScreen";

export function View() {
  const element = useRoutes([
    {
      path: '/',
      element: <StartScreen/>
    },
    {
      path: '/register',
      element: <RegisterScreen/>
    },
    {
      path: '/login',
      element: <LoginScreen/>
    }
  ]);
  return element;
}

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <View/>
      </BrowserRouter>
    </div>
  );
}

export default App;
