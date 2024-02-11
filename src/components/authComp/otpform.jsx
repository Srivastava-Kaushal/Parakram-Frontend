import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import * as Yup from "yup";
import { Button } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OtpForm = (props) => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const userId = localStorage.getItem("userId");
      const { data } = await axios.post(
        "http://localhost:8000/api/verifyOtp",
        { Otp: values.otp, userId: userId },
        { withCredentials: true }
      );
      // console.log(data);
      const { success, message } = data;
      console.log(data);
      if (success) {
        console.log("Success");
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container max-w-lg m-auto">
      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={Yup.object({
          otp: Yup.string().required("required"),
        })}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <Form autoComplete="off" className="form">
          <MyTextInput label="otp" name="otp" type="text" placeholder="" />
          <button className="login-button" type="submit">
            Submit
          </button>
          <button
            className="login-button"
            // onClick={onClick}
          >
            Resend Otp
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default OtpForm;
