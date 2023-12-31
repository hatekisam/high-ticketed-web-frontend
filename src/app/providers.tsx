"use client";
import { Next13ProgressBar } from "next13-progressbar";
import React, { FC, Suspense } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <MantineProvider
      theme={{
        colors: {
          brand: [
            "#F0BBDD",
            "#ED9BCF",
            "#EC7CC3",
            "#ED5DB8",
            "#F13EAF",
            "#F71FA7",
            "#523873",
            "#311d4a",
            "#C50E82",
            "#AD1374",
          ],
        },
        primaryColor: "brand",
      }}
    >
      <Notifications position="top-right" />
      <Next13ProgressBar
        color="#523873"
        height={"3px"}
        options={{ showSpinner: false }}
      />
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            {/* <RiseLoader color="#523873" /> */}
          </div>
        }
      >
        <div>{children}</div>
      </Suspense>
    </MantineProvider>
  );
};

export default Providers;
