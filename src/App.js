import React from "react";
import "./App.css";
import Header from "./components/Header/header.component";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Chat from "./components/Chat/Chat.component";
import Login from "./components/Login/Login.component";
import { Switch, Route } from "react-router-dom";
import { useStateValue } from "./provider/provider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
