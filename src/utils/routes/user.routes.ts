import { GiNotebook } from "react-icons/gi";
import { SideBarRoute } from ".";
// import { AiOutlineApartment } from "react-icons/ai";
import { BsFillCalendar2RangeFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";

export const userRoutes: SideBarRoute[] = [
  {
    name: "Dashboard",
    path: "/pm",
    icon: GiNotebook,
  },
  {
    name: "Academics",
    path: "",
    icon: FaBookReader,
    hasSubRoutes: true,
    routes: [
      {
        name: "Academic Year",
        path: "/pm/academic-year",
        icon: BsFillCalendar2RangeFill,
      },
      {
        name: "Terms",
        path: "/pm/terms",
        icon: BsFillCalendar2RangeFill,
      },
      {
        name: "Report-Cards",
        path: "/pm/report-cards",
        icon: GiNotebook,
      },
      {
        name: "Courses",
        path: "/pm/courses",
        icon: GiNotebook,
        iconSize: 23,
      },
    ],
  },
  {
    name: "Appeals",
    path: "/pm/appeals",
    icon: GiNotebook,
  },
  {
    name: "Students",
    path: "/pm/students",
    icon: GiNotebook,
  },
  {
    name: "Staff",
    path: "",
    icon: GiNotebook,
    iconSize: 23,
    hasSubRoutes: true,
    routes: [
      {
        name: "Teachers",
        path: "/pm/workers/teachers",
        icon: BsFillCalendar2RangeFill,
      },
      {
        name: "Discipline",
        path: "/pm/workers/discipline",
        icon: BsFillCalendar2RangeFill,
      },
      {
        name: "Accountant",
        path: "/pm/workers/accountants",
        icon: GiNotebook,
      },
      {
        name: "Others",
        path: "/pm/workers/others",
        icon: GiNotebook,
        iconSize: 23,
      },
    ],
  },
  {
    name: "Profile",
    path: "/pm/profile",
    icon: GiNotebook,
  },
];