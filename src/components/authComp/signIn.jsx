import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button, Modal } from "flowbite-react";
import validationSchema from "./validation";
import { useState } from "react";
import SetNewPass from "./setNewPass";
import OtpForm from "./otpform";

const SignIp = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSetModal, setopenSetModal] = useState(false);

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
                setOpenModal(true);
              }}
            >
              forgot password??
            </Button>
          </Form>
        </>
      </Formik>
      <Modal dismissible show={openModal}>
        <Modal.Header>forgot password</Modal.Header>
        <Modal.Body>
          <div className="m-10">
            <OtpForm
              openModal={() => setopenSetModal(true)}
              closeModal={() => setOpenModal(false)}
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal dismissible show={openSetModal}>
        <Modal.Header>forgot password</Modal.Header>
        <Modal.Body>
          <div className="m-10">
            <SetNewPass closeModal={() => setopenSetModal(false)} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignIp;
