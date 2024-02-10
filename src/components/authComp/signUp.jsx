import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button, Modal } from "flowbite-react";
import validationSchema from "./validation";
import { useState } from "react";
import OtpForm from "./otpform";

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    setOpenModal(true);
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
        {(f) => {
          return (
            <>
              <Form className="max-w-md mx-auto">
                <MyTextInput
                  label="email"
                  name="email"
                  type="email"
                  placeholder=""
                />

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
          );
        }}
      </Formik>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div className="m-10">
          <OtpForm />
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;
