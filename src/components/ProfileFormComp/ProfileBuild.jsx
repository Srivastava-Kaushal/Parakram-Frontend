import { Formik, Form } from "formik";
import MyTextInput from "../FormComps/input";
import validationSchema from "./validationSchema";
import MyPhoneInput from "../FormComps/phoneInput";
import React from "react";

const ProfileBuild = ({ user, onSubmit }) => {
  const getinitvals = () => {
    const initvals = {};
    initvals.firstName = user.firstName ? user.firstName : "";
    initvals.lastName = user.lastName ? user.lastName : "";
    initvals.email = user.email ? user.email : "";
    initvals.collage = user.collage ? user.collage : "";
    initvals.phoneNumber = user.phoneNumber ? user.phoneNumber : "";

    return initvals;
  };

  return (
    <>
      <div className="container max-w-lg m-auto">
        <h1 className="heading">Profile Build</h1>
        <Formik
          initialValues={getinitvals()}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            onSubmit(values);
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form autoComplete="off" className="form">
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

            <MyTextInput
              label="email"
              name="email"
              type="email"
              placeholder=""
            />

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

            <button className="login-button" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ProfileBuild;
