import { Checkbox, CheckboxIndicator } from "@material-tailwind/react";

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <Checkbox
      color="primary"
      className="mr-2"
      checked={checked}
      onChange={onChange}
    >
      <CheckboxIndicator></CheckboxIndicator>
    </Checkbox>
  );
};

export default CustomCheckbox;
