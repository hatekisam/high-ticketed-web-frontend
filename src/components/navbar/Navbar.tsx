import { SideBarRoute } from "@/utils/routes";
import React from "react";

interface Props {
  routes: SideBarRoute[];
}

const Navbar: React.FC<Props> = ({ routes }) => {
  return <div className="rounded-md border w-full h-[50px]">Navbar</div>;
};

export default Navbar;
