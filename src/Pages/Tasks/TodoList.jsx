import React from "react";
import { CheckCircle, Trash } from "lucide-react";
import { useState, useEffect } from "react";
import { Select, Input } from "@material-tailwind/react";
const TodoList = () => {
  return (
    <div className="w-[100%] md:w-full min-h-[60vh] md:min-h-[95vh] bg-green-950 rounded-xl text-lg md:text-xl flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl flex gap-2 items-center">
        Add a new Task <CheckCircle color="orange" size={40} />
      </h1>
      <form action="">
        <div className="flex gap-2 items-center justify-center text-white">
          <Input
            type="text"
            id="t"
            size="lg"
            className="rounded-none border-0 border-b border-gray-400 pr-0.5 shadow-none ring-0 hover:border-gray-900 focus:border-gray-900 data-[icon-placement=start]:!pl-[26px] dark:border-gray-600 dark:hover:border-gray-50 dark:focus:border-gray-50 text-white"
            placeholder="Walk the dog"
            inputProps={{
              style: {
                "&:focus": {
                  color: "white",
                },
              },
            }}
          ></Input>
          <Select size="md">
            <Select.Trigger
              className="w-[7rem] text-white"
              placeholder="Priority"
            />
            <Select.List>
              <Select.Option>Low</Select.Option>
              <Select.Option>Medium</Select.Option>
              <Select.Option>High</Select.Option>
            </Select.List>
          </Select>
        </div>
      </form>
    </div>
  );
};

export default TodoList;
