import { Formik, Form } from "formik";
import { Button } from "flowbite-react";
import MyTextInput from "../FormComps/input";
import validationSchema from "./validationSchema";

const RegisterForm = (props) => {
  const onSubmit = (values, { setSubmitting }) => {
    // console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <div className="container max-w-lg m-auto">
        <div className="heading">{props.heading.toUpperCase()}</div>

        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form autoComplete="off" className="form">
            <MyTextInput label="Name" name="name" type="text" placeholder="" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder=""
            />
            <button type="submit">submit</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegisterForm;
