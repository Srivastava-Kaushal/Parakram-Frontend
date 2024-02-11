import Form from "../components/RegistrationForm/form";
import transition from "../transition";

const RegisterPage = () => {
  const config = {
    // bhai isko hata dena bas aise hi lagaya hoon be
    heading: "SPORTS EVENT",
    maxTeamLength: 5,
    minTeamLength: 2,
  };
  return (
    <div className="formCard">
      <Form
        heading={config.heading}
        maxTeamLength={config.maxTeamLength}
        minTeamLength={config.minTeamLength}
      />
    </div>
  );
};

export default transition(RegisterPage);
