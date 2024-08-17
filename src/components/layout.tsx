"use client";

import React, { isValidElement } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>{isValidElement(children) ? children : <></>}</ThemeProvider>
  );
}

export default Layout;
