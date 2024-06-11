"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CubeIcon, TrashIcon } from "@radix-ui/react-icons";
import { ThemeToggleAlt } from "@/components/theme/theme-toggle";
import { Avatar } from "@/components/ui/avatar";

export default function Home() {
  const defaultCollapsed = false;
  const defaultLayout = [265, 265, 830];
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
          collapsed={isCollapsed}
          minSize={12}
          maxSize={15}
          onCollapse={(isCollapsed: boolean) => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed,
            )}`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
          }}
          className={cn(
            "flex flex-col justify-between",
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <div className="grid gap-1 p-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
            <Button
              className={isCollapsed ? "" : "justify-start gap-2"}
              variant={"default"}
              size={isCollapsed ? "icon" : "default"}
            >
              <CubeIcon />
              <span className={isCollapsed ? "hidden" : "flex"}>Sandboxes</span>
            </Button>
          </div>
          <div className="border-t p-2">jdboachie@gmail.com</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={16}
          maxSize={25}
        >
          <div className="p-2 size-full">
            <div className="p-2">Connections</div>
            <div className="rounded-lg border grid p-2">
              <div className="p-2 flex justify-between">
                <p className="text-base font-semibold">knust_data</p>
                <p className="text-primary/75">?</p>
              </div>
              <div className="p-2 grid">
                <p className="text-xs truncate">Created by @g.elvis</p>
                <p className="text-xs truncate">Updated 5mins ago</p>
              </div>
              <div className="p-2 flex grid-flow-col gap-2">
                <Button variant={"secondary"} size={"sm"}>
                  Connect
                </Button>
                <Button variant={"destructive"} size={"sm"}>
                  <TrashIcon />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <div className="p-2 w-fit">
            <ThemeToggleAlt />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
