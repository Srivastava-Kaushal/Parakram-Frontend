import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button, Modal } from "flowbite-react";
import validationSchema from "./validation";
import { useState } from "react";
import SetNewPass from "./setNewPass";
import OtpForm from "./otpform";
import Emailform from "./emailInput";

const SignIp = () => {
  const [openModal, setOpenModal] = useState([false, false, false]);

  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
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

            <Button type="submit">Submit</Button>
            <Button
              onClick={() => {
                setOpenModal([true, false, false]);
              }}
            >
              forgot password??
            </Button>
          </Form>
        </>
      </Formik>
      <Modal
        dismissible
        show={openModal[0]}
        onClose={() => {
          setOpenModal([false, false, false]);
        }}
      >
        <Modal.Header>forgot password</Modal.Header>
        <Modal.Body>
          <div className="m-10">
            <Emailform openModal={() => setOpenModal([false, true, false])} />
          </div>
        </Modal.Body>
      </Modal>

      <Modal dismissible show={openModal[1]}>
        <Modal.Header>forgot password</Modal.Header>
        <Modal.Body>
          <div className="m-10">
            <OtpForm openModal={() => setOpenModal([false, false, true])} />
          </div>
        </Modal.Body>
      </Modal>

      <Modal dismissible show={openModal[2]}>
        <Modal.Header>forgot password</Modal.Header>
        <Modal.Body>
          <div className="m-10">
            <SetNewPass openModal={() => setOpenModal([false, false, false])} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignIp;
