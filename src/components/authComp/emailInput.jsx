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
    <div>
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
        <Form className="max-w-md mx-auto">
          <MyTextInput label="email" name="email" type="email" placeholder="" />
          <Button type="submit">send otp</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Emailform;
