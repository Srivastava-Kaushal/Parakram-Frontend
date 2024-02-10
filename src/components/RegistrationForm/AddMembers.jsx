import { Button } from "flowbite-react";
import MyTextInput from "./input";

const AddMember = ({ index, push, remove, insert }) => {
  return (
    <div className="relative z-0 w-full mb-5 group" key={index}>
      <MyTextInput
        label="name"
        name={`members.${index}.name`}
        type="text"
        placeholder=""
      />
      <MyTextInput
        label="email"
        name={`members.${index}.email`}
        type="text"
        placeholder=""
      />
      <Button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 secondary"
        onClick={() => remove(index)}
      >
        remove member
      </Button>
    </div>
  );
};

export default AddMember;
