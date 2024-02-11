import SignUp from "../../components/authComp/signUp";
import transition from "../../transition";

const SignUpPage = () => {
  return (
    <div className="flex justify-center align-middle bg-black min-h-screen">
      <SignUp />
    </div>
  );
};
export default transition(SignUpPage);
