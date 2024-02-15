import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/RegistrationForm/teamForm";
import transition from "../transition";
import { animateScroll as scroll } from "react-scroll";
import IndForm from "../components/RegistrationForm/individualForm";
import axios from "axios";
import Loading from "../components/loader/loading";
import APIRoute from "../utils/routes";

const Register = () => {
  const { sport } = useParams();
  const [SportInfo, setSportInfo] = useState({
    // default mai kuch  nahi likhna hai
    // isko hata dena jab api lagayenge tab
    name: "cricket",
    type: "team",
  });
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(`${APIRoute}/api/event/register`,);
      setSportInfo(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
    // getData();
    // uncomment this when api is up
  }, []);

  const RenderForm = () => {
    if (loading) {
      return <Loading />;
    }
    if (SportInfo.type == "team") {
      return <Form heading={SportInfo.name} />;
    } else {
      return <IndForm heading={SportInfo.heading} />;
    }
  };

  return (
    <div className="flex justify-center align-middle bg-black min-h-screen p-52">
      {RenderForm()}
    </div>
  );
};

const RegisterPage = transition(Register);
export default RegisterPage;
