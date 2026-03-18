import {
  Menu,
  MenuContent,
  MenuTrigger,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { LogOut, MenuIcon, User } from "lucide-react";
import CustomBtn from "../../../Components/custom/CustomBtn";

const Settings = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Avatar
          size="md"
          className="border"
          src="https://i.pinimg.com/736x/ae/bf/0e/aebf0e2e561780da0b8488ec618c1233.jpg"
        ></Avatar>
      </MenuTrigger>
      <MenuContent className="p-2">
        <MenuItem className="flex p-3 items-center">
          <User className="mr-2 h-[20px] w-[20px]" />
          Account
        </MenuItem>
        {/* <MenuItem> */}
        <CustomBtn
          icon={LogOut}
          className="w-full bg-red-500 text-white border-none"
        >
          Log out
        </CustomBtn>
        {/* </MenuItem> */}
      </MenuContent>
    </Menu>
  );
};

export default Settings;
