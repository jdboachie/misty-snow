"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggleAlt } from "@/components/theme/theme-toggle";

import { MiddleTab } from "@/components/MiddleTab";

import { Plus } from "@phosphor-icons/react";

import QueryTool from "@/components/tools/querytool";
import LeftPane from "@/components/LeftPane";
import { PastQueryCard } from "@/components/PastQueryCard";


export default function Home() {
  const defaultCollapsed = false;
  const defaultLayout = [17, 23, 60];
  const navCollapsedSize = 4;
  const [isCollapsed, setIsCollapsed] =
    React.useState<boolean>(defaultCollapsed);

  return (
    <main className="h-screen size-full p-2 bg-secondary text-sm">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}`;
        }}
        className="bg-background shadow-xl grid size-full items-stretch border rounded-md"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={12}
          maxSize={25}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed,
            )}`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
          }}
          className={cn(
            "flex flex-col",
            isCollapsed &&
            "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          {/* left pane */}
          <LeftPane />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={20}
        // maxSize={25}
        >

          <MiddleTab>
            <PastQueryCard />
          </MiddleTab>

          <div className="sticky top-full ">
            <div className="flex flex-col gap-10 p-2">
              <Button className="w-full flex items-center justify-center gap-2">
                <Plus></Plus>
                New Connection
              </Button>
            </div>
          </div>

        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <div className="size-full">
            <QueryTool />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
