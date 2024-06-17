"use client"

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggleAlt } from "@/components/theme/theme-toggle";
// import { ArrowLeft as ArrowLeftIcon} from "@phosphor-icons/react";

import { MiddleTab } from "@/components/MiddleTab";

import { Plus } from "@phosphor-icons/react";

import LeftPane from "@/components/LeftPane";
import { PastQueryCard } from "@/components/PastQueryCard";

import { ArrowLeftIcon } from "@radix-ui/react-icons";


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

        <ResizablePanel defaultSize={defaultLayout[2]} minSize={60}>
          <div className="size-full relative flex flex-col items-center py-2 gap-4 px-4">
            <div className="homeConnectCard dark:bg-primary-foreground w-full h-2/5 rounded-lg py-4 px-5 relative">
              <div className="flex flex-col justify-center h-full gap-2 w-1/2">
                <div className="hello-text text-muted-foreground">
                  Hello Welcome, Elvis
                </div>
                <div className="bold-text font-bold text-4xl leading-tight">
                  Connect to Database With Just a Click
                </div>
                <Button className="w-32 flex-row gap-2 text-lg my-2 flex items-center">
                  Connect
                  <ArrowLeftIcon className="size-16 rotate-180 "></ArrowLeftIcon>
                </Button>
              </div>
            </div>

            <div className="doc-website flex justify-between w-full gap-4 h-2/5 relative">
              <div className="docs dark:bg-primary-foreground w-full h-10/12 rounded-lg py-4 px-8 relative">
                
              </div>
              <div className="docs dark:bg-primary-foreground w-full h-10/12 rounded-lg py-4 px-8 relative">
                
              </div>
            </div>
          </div>
        </ResizablePanel>
        
        </ResizablePanelGroup>
    </main>
  );
}
