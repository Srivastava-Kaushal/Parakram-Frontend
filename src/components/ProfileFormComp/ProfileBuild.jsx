import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import { Button } from "flowbite-react";
import validationSchema from "./validationSchema";
import MyPhoneInput from "../FormComps/phoneInput";

const ProfileBuild = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        collage: "",
        phoneNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form autoComplete="off" className="max-w-md mx-auto">
        <MyTextInput
          label="firstName"
          name="firstName"
          type="text"
          placeholder=""
        />

        <MyTextInput
          label="lastName"
          name="lastName"
          type="text"
          placeholder=""
        />

        <MyTextInput label="email" name="email" type="email" placeholder="" />

        <MyTextInput
          label="collage"
          name="collage"
          type="text"
          placeholder=""
        />

        <MyPhoneInput
          label="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="123-456-7890"
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  </div>
);

export default ProfileBuild;
