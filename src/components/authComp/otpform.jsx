import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import * as Yup from "yup";
import { Button } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpForm = (props) => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try{
      const userId = localStorage.getItem("userId")
      const {data} = await axios.post("http://localhost:8000/api/verifyOtp" , {Otp : values.otp , userId : userId } , {withCredentials : true});
      // console.log(data);
      const {success , message} = data;
      console.log(data);
      if(success){
        console.log("Success");
        navigate("/home");
      } 
    }
    catch(e){
      console.log(e);
    }
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
        <Form className="max-w-md mx-auto">
          <MyTextInput label="otp" name="otp" type="text" placeholder="" />
          <Button type="submit">Submit</Button>
          <Button onClick={onClick}>Resend Otp</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default OtpForm;
