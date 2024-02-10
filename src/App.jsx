import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import RegisterPage from "./pages/EventRegistration";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/profileBuild";
import SignUp from "./pages/auth/signUpPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<NavBar />}>
        <Route path="/" element={<Landing />} />
        <Route path="/merchandise" element={<Merchandise />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* add component/pages here */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
