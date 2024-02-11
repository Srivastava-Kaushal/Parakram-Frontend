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
    props.onSubmit(values);
    props.openModal();
  };

  const onClick = async(values) => {
    const email = localStorage.getItem("email");
    const userId = localStorage.getItem("userId");
    const {data} = await axios.post("http://localhost:8000/api/resendPassChange" , {email : email , userId : userId} , {withCredentials : true});
    console.log(data);
  };

  return (
    <div>
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
      </Formik>
    </div>
  );
};

export default OtpForm;
