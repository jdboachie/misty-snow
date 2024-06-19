"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import LeftPane from "@/components/LeftPane";
import { cn } from "@/lib/utils";

export default function DbexAppLayout({ children }: { children: React.ReactNode }) {
  const defaultCollapsed = false;
  const defaultLayout = [17, 23, 60];
  const navCollapsedSize = 4;
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(defaultCollapsed);

  React.useEffect(() => {
    const savedLayout = document.cookie
      .split('; ')
      .find(row => row.startsWith('react-resizable-panels:layout'))
      ?.split('=')[1];
    if (savedLayout) {
      const layoutSizes = JSON.parse(savedLayout);
    }

    const savedCollapsed = document.cookie
      .split('; ')
      .find(row => row.startsWith('react-resizable-panels:collapsed'))
      ?.split('=')[1];
    if (savedCollapsed) {
      setIsCollapsed(JSON.parse(savedCollapsed));
    }
  }, []);

  return (
    <section className="h-screen size-full p-2 bg-secondary text-sm">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)};path=/;`;
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
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)};path=/;`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)};path=/;`;
          }}
          className={cn(
            "flex flex-col",
            isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          {/* left pane */}
          <LeftPane />
        </ResizablePanel>

        <ResizableHandle withHandle />
        {children}
      </ResizablePanelGroup>
    </section>
  );
}
