import { Formik, Form } from "formik";
import validationSchema from "./validationSchema";
import AddMember from "./addmember";

const RegisterForm = () => {
  const handleSubmit = (e, f) => {
    const newMem = [...f.values.members, e];
    // console.log(newMem);
    f.setValues({ members: newMem });
  };

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          members: [],
        }}
        // validation:,
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(f) => {
          return (
            <>
              <AddMember handleSubmit={(e) => handleSubmit(e, f)} />
              <button onClick={f.handleSubmit} type="submit">
                submit
              </button>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterForm;
