import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Modal } from "flowbite-react";
import validationSchema from "./validation";
import { useState } from "react";
import SetNewPass from "./setNewPass";
import OtpForm from "./otpform";
import Emailform from "./emailInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIp = () => {
  const [openModal, setOpenModal] = useState([false, false, false]);
  const [email , setEmail] = useState(null);


  const submitEmailId = async(values) => {
    // const userId = localStorage.getItem("userId");
    const {email} = values;
    localStorage.setItem("email" , email);
    console.log(email);
    const {data} = await axios.post("http://localhost:8000/api/sendPassChangeOtp" , {email  :email} , {withCredentials : true});
    const {success , message } = data;
    const {_id} = data.user;
    localStorage.setItem("userId", _id);
    console.log(data);
  }

  const submitOtp = async(values) => {
    const userId = localStorage.getItem("userId");
    const {data} = await axios.post("http://localhost:8000/api/verifyPassChangeOtp" , {userId : userId , Otp : values.otp} , {withCredentials : true});
    console.log(data);
    localStorage.setItem("hashedId" , data.token);
  }
  
  const submitNewPass = async(values) => {
    const userId = localStorage.getItem("hashedId");
    const {data} = await axios.post("http://localhost:8000/api/changePass" , {newPass : values.password ,hashedUserId : userId } , {withCredentials : true});
    console.log(data);
    navigate("/signIn");
  }

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { data } = await axios.post(
      "http://localhost:8000/api/login",
      values,
      { withCredentials: true }
    );
    console.log("Hello");
    navigate("/");
  };

  return (
    <div className="container max-w-lg m-auto">
      <h1 className="heading">Sign In</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <>
          <Form autoComplete="off" className="form">
            <MyTextInput
              label="email"
              name="email"
              type="email"
              placeholder=""
            />

            <MyTextInput
              label="password"
              name="password"
              type="password"
              placeholder=""
            />

            <button className="login-button" type="submit">
              Submit
            </button>
            <span
              className="cursor-pointer forgot-password"
              onClick={() => {
                setOpenModal([true, false, false]);
              }}
            >
              forgot password??
            </span>
          </Form>
        </>
      </Formik>
      <Modal
        dismissible
        show={openModal[0]}
        onClose={() => {
          setOpenModal([false, false, false]);
        }}
      >
        <Modal.Header>forgot password</Modal.Header>
        {/* email Model */}
        <Modal.Body>
          <div className="m-10">
            <Emailform openModal={() => setOpenModal([false, true, false])} onSubmit={submitEmailId} emailState={setEmail} />
          </div>
        </Modal.Body>
      </Modal>

        {/* otp model */}
      <Modal dismissible show={openModal[1]}>
        <Modal.Header>forgot password</Modal.Header>
        <Modal.Body>
          <div className="m-10">
            <OtpForm openModal={() => setOpenModal([false, false, true])} onSubmit={submitOtp} />
          </div>
        </Modal.Body>
      </Modal>

        {/* setNew PAss */}
      <Modal dismissible show={openModal[2]}>
        <Modal.Header>forgot password</Modal.Header>
        <Modal.Body>
          <div className="m-10">
            <SetNewPass openModal={() => setOpenModal([false, false, false])} onSubmit={submitNewPass} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignIp;
