import { cookies } from "next/headers"
import {
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import MainNav from "@/components/layout/main-nav";
import AppLayout from "@/components/layout/app-layout";
import SecondaryNav from "@/components/layout/secondary-nav";
import { auth } from "@/auth";
import { SignIn } from "@/components/auth/server";

export default async function Home({
  children,
}: {
  children: React.ReactNode;
}) {

  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : [14, 16, 70]
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : false

  const session = await auth()

  if ( !session ) {
    return (
      <>
        <p>You are not authorized to access this page</p>
        <SignIn />
      </>
    )
  } else {
    return (
      <main className="h-screen size-full">
        <AppLayout>
        <MainNav
          defaultCollapsed={defaultCollapsed}
          defaultSize={defaultLayout[0]}
        />
          <ResizableHandle withHandle />
          {children}
        </AppLayout>
      </main>
    );
  }
}
