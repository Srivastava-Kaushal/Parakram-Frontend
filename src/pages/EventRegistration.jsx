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
};

export default transition(RegisterPage);
