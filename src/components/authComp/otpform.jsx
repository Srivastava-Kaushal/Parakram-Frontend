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
<<<<<<< HEAD
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
=======
    props.onSubmit(values);
    props.openModal();
  };

  const onClick = async(values) => {
    const email = localStorage.getItem("email");
    const userId = localStorage.getItem("userId");
    const {data} = await axios.post("http://localhost:8000/api/resendPassChange" , {email : email , userId : userId} , {withCredentials : true});
    console.log(data);
>>>>>>> ffe0ffd10920dfc268fef7ab821cfbf5e403b8a8
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
<<<<<<< HEAD
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
=======
        {({ values }) => {
          return (
            <Form className="max-w-md mx-auto">
              <MyTextInput label="otp" name="otp" type="text" placeholder="" />
              <Button type="submit">Submit</Button>
              <Button
                onClick={() => {
                  onClick(values);
                }}
              >
                Resend Otp
              </Button>
            </Form>
          );
        }}
>>>>>>> ffe0ffd10920dfc268fef7ab821cfbf5e403b8a8
      </Formik>
    </div>
  );
};

export default OtpForm;
