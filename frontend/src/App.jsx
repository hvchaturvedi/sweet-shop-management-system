import { useState } from "react";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <div className={loggedIn ? "container" : "auth-wrapper"}>
      {loggedIn ? (
        <Dashboard onLogout={() => setLoggedIn(false)} />
      ) : (
        <Auth onAuth={() => setLoggedIn(true)} />
      )}
    </div>
  );
}
