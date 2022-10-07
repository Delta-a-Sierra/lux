import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Construction,
  Signup,
  SignIn,
  GetStarted,
  Home,
  Profile,
} from "./routes";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "./contexts/theme";

function App() {
  const Location = useLocation();
  const {
    state: { theme },
  } = useTheme();

  return (
    <div className={theme === "dark" && "dark"}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={Location} key={Location.key}>
          <Route exact path="/" element={<Construction />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/getstarted" element={<GetStarted />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
