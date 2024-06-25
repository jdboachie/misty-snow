import { cookies } from "next/headers"

import QueryTool from '@/components/tools/querytool'
import { ResizableHandle, ResizablePanel } from '@/components/ui/resizable';
import { QueryListView } from "@/components/query-list-view";

const QueryPage = () => {

  const layout = cookies().get("react-resizable-panels:layout")
  const defaultLayout = layout ? JSON.parse(layout.value) : [15, 25, 60]

  return (
    <>
      <ResizablePanel
        defaultSize={defaultLayout[1]}
        minSize={20}
        maxSize={30}
      >
        <QueryListView />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[2]} className="grid grid-flow-col">
        <QueryTool />
      </ResizablePanel>
    </>
  )
}

export default QueryPage