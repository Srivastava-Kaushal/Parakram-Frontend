<<<<<<< HEAD
import Form from "../components/RegistrationForm/teamForm";
import transition from "../transition";
import IndForm from "../components/RegistrationForm/individualForm";

const RegisterPage = () => {
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
=======
import { useEffect } from 'react';
import Form from '../components/RegistrationForm/form';
import transition from '../transition';
import { animateScroll as scroll } from 'react-scroll';

const Register = () => {
	useEffect(() => {
		scroll.scrollToTop({ duration: 1000 });
	}, []);
	return (
		<>
			<Form maxTeamLength={10} minTeamLength={8} />
		</>
	);
>>>>>>> ffe0ffd10920dfc268fef7ab821cfbf5e403b8a8
};

const RegisterPage = transition(Register);
export default RegisterPage;
