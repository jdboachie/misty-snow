'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MainNav from "@/components/layout/main-nav";
import SecondaryNav from "@/components/layout/secondary-nav";


export default function AppLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <main className="h-screen size-full">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}`;
        }}
        className="grid size-full items-stretch"
      >
        {children}
      </ResizablePanelGroup>
    </main>
  );
}
