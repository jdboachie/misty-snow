import { cookies } from "next/headers"
import { ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import { ConnectionsListView } from '@/components/connection-list-view'

const Layout = ({ children }: {children: React.ReactNode}) => {

  const layout = cookies().get("react-resizable-panels:layout")
  const defaultLayout = layout ? JSON.parse(layout.value) : [15, 25, 60]

  return (
    <>
      <ResizablePanel
        defaultSize={defaultLayout[1]}
        minSize={20}
        maxSize={30}
      >
        <ConnectionsListView />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]}>
        { children }
      </ResizablePanel>
    </>
  )
}

export default Layout