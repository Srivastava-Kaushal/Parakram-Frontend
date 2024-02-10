import Form from "../components/RegistrationForm/form";
import transition from "../transition";

const Register = () => {
  return (
    <>
      <Form maxTeamLength={10} minTeamLength={8} />
    </>
  );
};

const RegisterPage = transition(Register);
export default RegisterPage;
