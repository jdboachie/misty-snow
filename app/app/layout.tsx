
import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MainNav from "@/components/layout/main-nav";
import SecondaryNav from "@/components/layout/secondary-nav";


export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {

  const defaultLayout = [13, 27, 60];

  return (
    <main className="h-screen size-full">
      <ResizablePanelGroup
        direction="horizontal"
        // onLayout={(sizes: number[]) => {
        //   document.cookie = `react-resizable-panels:layout=${JSON.stringify(
        //     sizes,
        //   )}`;
        // }}
        className="grid size-full items-stretch"
      >
        <MainNav defaultSize={defaultLayout[0]} />
        <ResizableHandle withHandle />
        <SecondaryNav />
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
