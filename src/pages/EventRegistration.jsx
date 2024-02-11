import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Form from "../components/RegistrationForm/teamForm";
import transition from "../transition";
import { animateScroll as scroll } from 'react-scroll';
import IndForm from "../components/RegistrationForm/individualForm";

const Register = () => {
  const { sport } = useParams();

	useEffect(() => {
		scroll.scrollToTop({ duration: 1000 });
	}, []);

  const config = {
    // bhai isko hata dena bas aise hi lagaya hoon be
    heading: "SPORTS EVENT",
    maxTeamLength: 5,
    minTeamLength: 2,
  };
  return (
    <div className="flex justify-center align-middle bg-black min-h-screen">
      <Form
        heading={config.heading}
        maxTeamLength={config.maxTeamLength}
        minTeamLength={config.minTeamLength}
      />
      {/* <IndForm heading={config.heading} /> */}
    </div>
  );
}

const RegisterPage = transition(Register);
export default RegisterPage;
