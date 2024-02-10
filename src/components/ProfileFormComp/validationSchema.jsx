import * as Yup from "yup";

const phoneRegExp = /^[6-9]\d{9}$/;

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  collage: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
});

export default validationSchema;
