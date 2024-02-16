import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import EventsPage from "./pages/EventsPage";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/footer/Footer";
import Sponsors from "./pages/Sponsors";
import Accomodation from "./pages/Accomodation";
import NoPage from "./pages/NoPage";
import AboutUsPage from "./pages/AboutUsPage";
import RedirectToHomePage from "./pages/RedirectToHomePage/RedirectToHome";
import Team from "./pages/Team";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RedirectToHomePage />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/merchandise" element={<Merchandise />} />
          {/* <Route path="/registerEvent/:sport" element={<RegisterPage />} /> */}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
