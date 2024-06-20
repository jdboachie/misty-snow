"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";

import { Button } from "@/components/ui/button";
import { ThemeToggleAlt } from "@/components/theme/theme-toggle";

import { MiddleTab } from "@/components/MiddleTab";

import { Plus } from "@phosphor-icons/react";

import QueryTool from "@/components/tools/querytool";
import { PastQueryCard } from "@/components/PastQueryCard";


export default function Home() {
  const defaultLayout = [17, 23, 60];
  return (
    <>
      <MiddleTab tabName="Queries">
        <PastQueryCard />
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
