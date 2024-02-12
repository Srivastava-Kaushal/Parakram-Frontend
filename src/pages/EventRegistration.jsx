import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/RegistrationForm/teamForm";
import transition from "../transition";
import { animateScroll as scroll } from "react-scroll";
import IndForm from "../components/RegistrationForm/individualForm";
import axios from "axios";
import Loading from "../components/loader/loading";

const Register = () => {
  const { sport } = useParams();
  const [SportInfo, setSportInfo] = useState({
    // default mai kuch  nahi likhna hai
    // isko hata dena jab api lagayenge tab
    name: "cricket",
    maxTeamLength: 5,
    minTeamLength: 2,
    type: "team",
  });
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(`http:/parakaramapi/${sport}`);
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
      return (
        <Form
          heading={SportInfo.name}
          maxTeamLength={SportInfo.maxTeamLength}
          minTeamLength={SportInfo.minTeamLength}
        />
      );
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
