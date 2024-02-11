import * as Yup from "yup";
import _ from "lodash";

Yup.addMethod(Yup.array, "uniqueProperty", function (propertyPath, message) {
  return this.test("unique", "", function (list) {
    const errors = [];

    list.forEach((item, index) => {
      const propertyValue = _.get(item, propertyPath);

      if (
        propertyValue &&
        _.filter(list, [propertyPath, propertyValue]).length > 1
      ) {
        errors.push(
          this.createError({
            path: `${this.path}[${index}].${propertyPath}`,
            message,
          })
        );
      }
    });

    if (!_.isEmpty(errors)) {
      throw new Yup.ValidationError(errors);
    }

    return true;
  });
});

const validationSchema = Yup.object({
  members: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })
    )
    .uniqueProperty("email", "duplicate email"),
  TeamLeader: Yup.string().email("Invalid email address").required("Required"),
  TeamName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
});

export default validationSchema;
