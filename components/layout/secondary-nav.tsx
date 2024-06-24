import {
  ResizablePanel,
} from "@/components/ui/resizable";
import { QueryListView } from "../query-list-view";
import { ConnectionsListView } from "../connection-list-view";


function SecondaryNav({ defaultSize } : {defaultSize: number}) {

  return (
    <ResizablePanel
      defaultSize={defaultSize}
      minSize={20}
      maxSize={30}
    >
      
    </ResizablePanel>
  )
}

export default SecondaryNav