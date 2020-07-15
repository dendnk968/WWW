import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Login from "./pages/login/LoginPage";
import {Layout} from "antd";
import Game from "./pages/Game/Game";
import AdminPage from "./pages/Admin/Admin";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path={"/admin"}><AdminPage/></Route>
                    <Route path={"/game"}><Game/></Route>
                    <Route path={"*"}><Login/></Route>
                </Switch>
            </div>
        );
    }
}

export default App;
