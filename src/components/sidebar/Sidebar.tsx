"use client";
import React, { useEffect, useState } from "react";
import { SideBarRoute } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapse } from "@mantine/core";
import { BiChevronRight } from "react-icons/bi";

interface Props {
  routes: SideBarRoute[];
}

const Sidebar: React.FC<Props> = ({ routes }) => {
  const [opened, setOpened] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const path = usePathname();
  const isActiveLink = (linkPath: string, index: number) => {
    if (index === 0) return path === linkPath;
    return path.startsWith(linkPath);
  };

  useEffect(() => {
    setMobileNav(false);
  }, [path]);
  return (
    <div className="rounded-md  bg-[#191A1D] w-[20%] p-4 overflow-y-auto">
      <p className="text-2xl font-bold">HTicketed</p>
      <div className="my-5">
        <p className="font-bold">MAIN</p>
        <div className="">
          {routes.map((route, i) => {
            if (route.hasSubRoutes && route.routes)
              return (
                <WithSubRoutes
                  key={route.name}
                  route={route}
                  path={path}
                  opened={opened}
                  setOpened={setOpened}
                />
              );
            return (
              <Link
                key={route.name}
                href={route.path}
                className={
                  isActiveLink(route.path, i)
                    ? "flex flex-row gap-5 items-center p-2 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-1"
                    : "flex flex-row gap-5 items-center p-2 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-1"
                }
              >
                {/* <route.icon size={route.iconSize ?? 20} /> */}
                <p className="transition-all duration-200 text-sm">
                  {route.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="my-5">
        <p className="font-bold">PINNED</p>
        <div className="">
          {routes.map((route, i) => {
            if (route.hasSubRoutes && route.routes)
              return (
                <WithSubRoutes
                  key={route.name}
                  route={route}
                  path={path}
                  opened={opened}
                  setOpened={setOpened}
                />
              );
            return (
              <Link
                key={route.name}
                href={route.path}
                className={
                  isActiveLink(route.path, i)
                    ? "flex flex-row gap-5 items-center p-2 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-1"
                    : "flex flex-row gap-5 items-center p-2 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-1"
                }
              >
                {/* <route.icon size={route.iconSize ?? 20} /> */}
                <p className="transition-all duration-200 text-sm">
                  {route.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const WithSubRoutes: React.FC<{
  route: SideBarRoute;
  path: string;
  opened: string;
  setOpened: any;
}> = ({ route, path, opened, setOpened }) => {
  const isActiveLink = (linkPath: string) => path.startsWith(linkPath);
  return (
    <div key={route.name} className=" w-full flex flex-col">
      <button
        className={
          // ? 'flex flex-row gap-5 items-center p-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-2'
          "flex flex-row gap-5 bg-transparent items-center p-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-1"
        }
        onClick={() => setOpened(opened === route.name ? "" : route.name)}
      >
        {/* <route.icon size={route.iconSize ?? 20} /> */}
        {route.name}
        <BiChevronRight
          size={25}
          className={`ml-auto duration-300 ${
            opened === route.name ? " rotate-90" : " rotate-0"
          }`}
        />
      </button>
      <Collapse in={opened === route.name}>
        <div className="flex flex-col w-full pl-4">
          {route.routes?.map((subRoute) => (
            <Link
              key={subRoute.name}
              href={subRoute.path}
              className={
                isActiveLink(subRoute.path)
                  ? "flex flex-row gap-5 items-center p-2 py-3 rounded-lg bg-[rgba(42,10,82,0.1)] text-[rgba(42,10,82,0.8)] my-1"
                  : "flex flex-row gap-5 items-center p-2 py-3 rounded-lg hover:bg-[rgba(42,10,82,0.1)] hover:text-[rgba(42,10,82,0.8)] my-1"
              }
            >
              <subRoute.icon size={subRoute.iconSize ?? 20} />
              <p className=" whitespace-nowrap transition-all duration-200">
                {subRoute.name}
              </p>
            </Link>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default Sidebar;
