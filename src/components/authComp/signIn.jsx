import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button } from "flowbite-react";
import validationSchema from "./validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIp = () => {
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const {data} = await axios.post("http://localhost:8000/api/login" , values , {withCredentials : true});
    console.log("Hello");
    navigate("/home");
  };

  return (
    <div>
      <h1>Sign In</h1>
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
        <Form className="max-w-md mx-auto">
          <MyTextInput label="email" name="email" type="email" placeholder="" />

          <MyTextInput
            label="password"
            name="password"
            type="password"
            placeholder=""
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIp;
