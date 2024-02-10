import { Formik, Form, FieldArray } from "formik";
import AddMember from "../FormComps/AddMembers";
import { Button } from "flowbite-react";
import MyTextInput from "../FormComps/input";
import validationSchema from "./validationSchema";
import MySelect from "../FormComps/selectLeader";

const geninitvals = (minTeamLength) => {
  const initmems = [];
  for (let i = 0; i < minTeamLength; i++) {
    initmems.push({});
  }
  const initVals = {
    members: initmems,
    TeamName: "",
    TeamLeader: "",
  };

  return initVals;
};

const RegisterForm = (props) => {
  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const renderAddMemButton = (values, push) => {
    if (values.members.length < props.maxTeamLength) {
      return (
        <Button
          type="button"
          className="secondary"
          onClick={() => push({ name: "", email: "" })}
        >
          Add member
        </Button>
      );
    } else {
      return "";
    }
  };

  const renderOptions = ({ members }) => {
    let options = members.map((member, index) => {
      console.log(Object.keys(member).length);
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
    console.log(options);
    return options;
  };

  return (
    <>
      <h1>register Event</h1>
      <Formik
        initialValues={geninitvals(props.minTeamLength)}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form className="max-w-lg mx-auto">
            <MyTextInput
              label="Team Name"
              name="TeamName"
              type="text"
              placeholder=""
            />
            <FieldArray className="grid md:grid-cols-2 md:gap-6" name="members">
              {({ insert, remove, push }) => (
                <div>
                  {values.members.length > 0 &&
                    values.members.map((member, index) => (
                      <AddMember
                        key={index}
                        insert={insert}
                        remove={remove}
                        push={push}
                        index={index}
                      />
                    ))}
                  {renderAddMemButton(values, push)}
                </div>
              )}
            </FieldArray>
            <MySelect label="Team Leader" name="TeamLeader">
              {renderOptions(values)}
            </MySelect>
            <div>
              <Button type="submit">submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
