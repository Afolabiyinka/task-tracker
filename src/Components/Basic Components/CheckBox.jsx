import React from "react";
import { Checkbox, CheckboxIndicator } from "@material-tailwind/react";

export default function CheckboxDemo({ checked, onChange }) {
  return (
    <div className="flex items-center">
      <Checkbox
        checked={checked}
        onChange={onChange}
        color="blue"
        // ripple={false}
        className="hover:scale-105 transition-transform duration-500 mr-1"
      >
        <CheckboxIndicator></CheckboxIndicator>
      </Checkbox>
    </div>
  );
}
