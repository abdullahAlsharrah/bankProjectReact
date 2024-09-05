import "./App.css";
import UserContext from "./utilities/context/userContext";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { useNavigate } from "react-router";
import { checkToken } from "./api/auth";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logedIn = checkToken();

    if (logedIn) {
      navigate("/");
      setUser(true);
    } else {
      navigate("/login");
      setUser(false);
    }
  }, [user, navigate]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="p-3">
        <Header />
        {user ? <Main /> : <Auth />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
