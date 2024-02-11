import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import * as Yup from "yup";
import { Button } from "flowbite-react";

const Emailform = (props) => {
  const onSubmit = async (values) => {
    props.onSubmit(values);
    props.openModal();

  };

  return (
    <div className="container max-w-lg m-auto">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("required"),
        })}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <Form autoComplete="off" className="form">
          <MyTextInput label="email" name="email" type="email" placeholder="" />
          <button className="login-button" type="submit">
            send otp
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Emailform;
