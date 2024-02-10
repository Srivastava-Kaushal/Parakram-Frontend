import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button } from "flowbite-react";
import validationSchema from "./validation";

const SignUp = () => {
  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
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

          <MyTextInput
            label="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder=""
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
