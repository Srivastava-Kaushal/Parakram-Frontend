import Form from "../components/RegistrationForm/form";

const RegisterPage = () => {
  return (
    <>
      <Form maxTeamLength={10} minTeamLength={8} />
    </>
  );
};

export default RegisterPage;
