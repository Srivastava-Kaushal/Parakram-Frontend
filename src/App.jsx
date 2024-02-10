import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import RegisterPage from "./pages/EventRegistration";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/profileBuild";
import SignUp from "./pages/auth/signUpPage";
import SignIn from "./pages/auth/signInPage";
import Sponsers from "./pages/Sponsors";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/footer/Footer";
import Sponsors from "./pages/Sponsors";
import Accomodation from "./pages/Accomodation";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/sponsors" element={<Sponsers />} />
          <Route path="/sponsors" element={<Sponsors/>} />
          <Route path="/accomodation" element={<Accomodation/>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
