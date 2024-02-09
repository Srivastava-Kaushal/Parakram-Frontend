// import React from "react";
// import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import MyTextInput from "./input";
import MyCheckbox from "./checkbox";
import validationSchema from "./validationSchema";

// And now we can use these
const AddMember = (props) => {
  console.log();
  return (
    <>
      <h1>this is for addin member!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          teamleader: false, // added for our checkbox
        }}
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          props.handleSubmit(values);
          setSubmitting(false);
          // yahan pe on submit likhna api pe post request karna
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MyCheckbox name="teamleader">teamleader ?</MyCheckbox>

          <button type="submit">add member</button>
          {/* <button onClick={removeMember}>remove member </button> */}
        </Form>
      </Formik>
    </>
  );
};

export default AddMember;
