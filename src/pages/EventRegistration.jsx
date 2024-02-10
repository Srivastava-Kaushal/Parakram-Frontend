import Form from "../components/RegistrationForm/form";
import transition from "../transition";

const RegisterPage = () => {
  return (
    <>
      <Form maxTeamLength={10} minTeamLength={8} />
    </>
  );
};

export default transition(RegisterPage);
