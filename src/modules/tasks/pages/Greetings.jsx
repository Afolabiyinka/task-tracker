import { Sun, Moon, CloudSun } from "lucide-react";
import Settings from "../components/Settings";
import Switch from "../../ModeToggle";

const Greetings = () => {
  const timeNow = new Date().getHours();

  const getGreeting = () => {
    if (timeNow >= 5 && timeNow < 12)
      return { greeting: "Good Morning", Icon: Sun, color: "text-yellow-500" };
    if (timeNow >= 12 && timeNow < 18)
      return {
        greeting: "Good Afternoon",
        Icon: CloudSun,
        color: "text-orange-400",
      };
    return { greeting: "Good Evening", Icon: Moon, color: "text-indigo-500" };
  };

  const { greeting, Icon, color } = getGreeting();

  return (
    <div className="w-full rounded-2xl border p-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon size={40} className={`${color} stroke-[1.5px]`} />
          <div className="flex flex-col items-center ">
            <h1 className="md:text-2xl font-bold">{greeting}, Olayinka</h1>
            <p className="md:text-xl">What do you plan to do today?</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Switch />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Greetings;
