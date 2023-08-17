import { 
    PiMonitorFill, 
    PiPencilSimpleFill 
} from "react-icons/pi";
import { TbDeviceMobileFilled } from "react-icons/tb";
import { RiComputerFill } from "react-icons/ri";

export const services = [
    {
        label: "Web apps",
        icon: <RiComputerFill className = "text-4xl" />
    },
    {
        label: "Mobile apps",
        icon: <TbDeviceMobileFilled className = "text-4xl" />
    },
    {
        label: "Desktop apps",
        icon: <PiMonitorFill className = "text-4xl" />
    },
    {
        label: "UI/UX design",
        icon: <PiPencilSimpleFill className = "text-4xl" />
    },
];