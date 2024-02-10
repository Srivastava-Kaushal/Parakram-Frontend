import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import * as Yup from "yup";
import { Button } from "flowbite-react";

const OtpForm = (props) => {
  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
    props.closeModal();
    if (props.openModal) {
      props.openModal();
    }
  };

  const onClick = (e) => {
    console.log("resend otp");
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
