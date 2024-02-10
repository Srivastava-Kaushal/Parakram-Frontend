import * as Yup from "yup";

const validationSchema = Yup.object({
  members: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    })
  ),
  TeamLeader: Yup.string().email("Invalid email address").required("Required"),
  TeamName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});

export default validationSchema;
