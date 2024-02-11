import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import * as Yup from "yup";
import { Button } from "flowbite-react";

const Emailform = (props) => {
  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
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
