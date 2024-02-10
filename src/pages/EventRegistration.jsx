import { useEffect } from "react";
import Form from "../components/RegistrationForm/form";
import transition from "../transition";
import { animateScroll as scroll } from "react-scroll";

const RegisterPage = () => {
  
  useEffect(() => {
    scroll.scrollToTop({ duration: 1000 });
  }, []);
  return (
    <>
      <Form maxTeamLength={10} minTeamLength={8} />
    </>
  );
};

export default transition(RegisterPage);
