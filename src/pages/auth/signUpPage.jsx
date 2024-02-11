import SignUp from "../../components/authComp/signUp";
import transition from "../../transition";

const SignUpCom = () => {
  return (
    <div className="flex justify-center align-middle bg-black min-h-screen">
      <SignUp />
    </div>
  );
};

const SignUpPage = transition(SignUpCom);
export default SignUpPage;
