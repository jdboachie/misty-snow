"use client"

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import LeftPane from "@/components/LeftPane";

export default function dbexLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
        <LeftPane/>
        <ResizableHandle withHandle />

      {children}

    </ResizablePanelGroup>
  </main >

)
}