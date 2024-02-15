import { Formik, Form, FieldArray } from "formik";
import AddMember from "../FormComps/AddMembers";
import { Button } from "flowbite-react";
import MyTextInput from "../FormComps/input";
import validationSchema from "./validationSchema";
import MySelect from "../FormComps/selectLeader";

const RegisterForm = (props) => {
  const onSubmit = (values, { setSubmitting }) => {
    // console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const renderAddMemButton = (values, push) => {
    if (values.members.length < props.maxTeamLength) {
      return (
        <button
          type="button"
          className="login-button"
          onClick={() => push({ name: "", email: "" })}
        >
          Add member
        </button>
      );
    } else {
      return "";
    }
  };

  const renderOptions = ({ members }) => {
    let options = members.map((member, index) => {
      // console.log(Object.keys(member).length);
      if (
        Object.keys(member).length === 2 &&
        member.name != "" &&
        member.email != ""
      ) {
        return (
          <option key={index + 1} value={member.email}>
            {member.name}
          </option>
        );
      }
    });

    const defaultOption = <option key={0}>select Leader</option>;
    options.unshift(defaultOption);
    // console.log(options);
    return options;
  };

  const getinitvals = (minTeamLength) => {
    const initvals = { members: [], TeamName: "", TeamLeader: "" };
    console.log(minTeamLength);
    for (let i = 0; i < minTeamLength; i++) {
      initvals.members.push({});
    }

    return initvals;
  };

  return (
    <>
      <div className="container max-w-lg m-auto">
        <div className="heading">{props.heading.toUpperCase()}</div>

        <Formik
          initialValues={getinitvals(props)}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form autoComplete="off" className="form">
              <MyTextInput
                label="Team Name"
                name="TeamName"
                type="text"
                placeholder=""
              />
              <br />
              <MySelect label="Team Leader" name="TeamLeader">
                {renderOptions(values)}
              </MySelect>
              <div>
                <button type="submit" className="login-button">
                  submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterForm;
