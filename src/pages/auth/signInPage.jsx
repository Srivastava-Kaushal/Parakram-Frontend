import SignIn from "../../components/authComp/signIn";
import transition from "../../transition";

const SignUpPage = () => {
  return (
    <div className="flex justify-center align-middle bg-black min-h-screen">
      <SignIn />
    </div>
  );
};

export default transition(SignUpPage);
