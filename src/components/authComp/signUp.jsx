import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button, Modal } from "flowbite-react";
import validationSchema from "./validation";
import { useState } from "react";
import OtpForm from "./otpform";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  // const [userID, setUserID] = useState(null);

  const onSubmit = async (values) => {
    try {
      // const {email ,username , password} = values;
      const { data } = await axios.post(
        "http://localhost:8000/api/register",
        values,
        {
          withCredentials: true,
        }
      );
      console.log(data);
      const { _id } = data.user;
      localStorage.setItem("userId" , _id);
      // setUserID(_id);
      setOpenModal(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          username: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(f) => {
          return (
            <>
              <Form className="max-w-md mx-auto">
                <MyTextInput
                  label="email"
                  name="email"
                  type="email"
                  placeholder=""
                />
                <MyTextInput
                  label="username"
                  name="username"
                  type="text"
                  placeholder=""
                />

                <MyTextInput
                  label="password"
                  name="password"
                  type="password"
                  placeholder=""
                />

                <MyTextInput
                  label="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder=""
                />

                <Button type="submit">Submit</Button>
              </Form>
            </>
          );
        }}
      </Formik>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div className="m-10">
          <OtpForm />
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;
