import { cookies } from "next/headers"
import {
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import MainNav from "@/components/layout/main-nav";
import AppLayout from "@/components/layout/app-layout";
import SecondaryNav from "@/components/layout/secondary-nav";

export default function Home({
  children,
}: {
  children: React.ReactNode;
}) {

  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <main className="h-screen size-full">
      <AppLayout>
      <MainNav
        defaultCollapsed={defaultCollapsed}
        defaultSize={defaultLayout[0]}
      />
        <ResizableHandle withHandle />
        <SecondaryNav
          defaultSize={defaultLayout[1]}
        />
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          {children}
        </ResizablePanel>
      </AppLayout>
    </main>
  );
}
