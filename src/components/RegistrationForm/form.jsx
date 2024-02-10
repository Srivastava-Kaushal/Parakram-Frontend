import { Formik, Form, FieldArray } from "formik";
import AddMember from "./AddMembers";
import { Button } from "flowbite-react";
import MyTextInput from "./input";
import validationSchema from "./validationSchema";

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

  return (
    <>
      <h1>register Event</h1>
      <Formik
        initialValues={geninitvals(props.minTeamLength)}
        // validation:,
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
