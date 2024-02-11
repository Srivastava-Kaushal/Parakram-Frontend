import { Button } from "flowbite-react";
import MyTextInput from "./input";

const AddMember = ({ push, remove, insert, index }) => {
  console.log(index);
  return (
    <div className="relative z-0 w-full mb-5 group" key={index}>
      <MyTextInput
        label="name"
        name={`members[${index}].name`}
        type="text"
        placeholder=""
      />
      <MyTextInput
        label="email"
        name={`members[${index}].email`}
        type="text"
        placeholder=""
      />

      <Button color="purple" type="button" onClick={() => remove(index)}>
        remove member
      </Button>
    </div>
  );
};

export default AddMember;
