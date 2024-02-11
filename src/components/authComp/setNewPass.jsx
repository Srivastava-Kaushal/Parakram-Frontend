import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button } from "flowbite-react";

const SetNewPass = (props) => {
  const onSubmit = async (values) => {
    props.onSubmit(values);
    props.openModal();
  };

  return (
    <div>
      <h1>Set New Password</h1>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <>
          <Form className="max-w-md mx-auto">
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
      </Formik>
    </div>
  );
};

export default SetNewPass;
