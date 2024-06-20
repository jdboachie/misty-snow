"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";

import { ThemeToggleAlt } from "@/components/theme/theme-toggle";

import { MiddleTab } from "@/components/MiddleTab";
import { PastConnectionCard } from "@/components/PastConnectionCard";

import QueryTool from "@/components/tools/querytool";


export default function Home() {
  const defaultLayout = [17, 23, 60];

  return (
    <>
      <MiddleTab tabName="Connections">
        <PastConnectionCard />
      </MiddleTab>


      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]}>
        <div className="size-full">
          <QueryTool />
        </div>
      </ResizablePanel>
    </>
  );
}
