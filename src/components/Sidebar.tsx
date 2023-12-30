import React from "react";

interface Props {
  routes: SidebarRoutes[];
}

const Sidebar: React.FC<Props> = ({ routes }) => {
  return <div className="rounded-md border w-[20%]">Sidebar</div>;
};

export default Sidebar;
