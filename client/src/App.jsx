import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails.jsx";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext.js";

function App() {
  // TODO: remove this from App component
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem("accessToken", state.accessToken);

    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };
  return (
    <>
      <AuthContext.Provider value={contextData}>
        <div id="box">
          <Header />

          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/games" element={<GameList />} />
              <Route path="/games/:gameId/details" element={<GameDetails />} />
              <Route path="/games/create" element={<GameCreate />} />
            </Routes>
          </main>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
