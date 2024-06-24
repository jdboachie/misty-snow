import {
  MagnifyingGlass as MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  ResizablePanel,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ConnectionsListView } from '@/components/connectionsview'
import ConnectionCardSkeleton from '@/components/closet/skeletons/ConnectionCardSkeleton';


function SecondaryNav({ defaultSize } : {defaultSize: number}) {

  return (
    <ResizablePanel
      defaultSize={defaultSize}
      minSize={20}
      maxSize={30}
    >
      <Tabs defaultValue="all">
        <div className="grid grid-flow-col py-2 px-4">
          <p className="py-1.5 font-medium text-muted-foreground">Connections</p>
          <TabsList className="w-full">
            <TabsTrigger value="all" className="w-full"> All </TabsTrigger>
            <TabsTrigger value="active" className="w-full"> Active </TabsTrigger>
          </TabsList>
        </div>
        <Separator />
        <div className="p-4">
          <form>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
        <TabsContent value="all" className="m-0 px-4">
          <ConnectionsListView />
        </TabsContent>
        <TabsContent value="active" className="m-0 px-4">
          <ConnectionCardSkeleton />
        </TabsContent>
      </Tabs>
    </ResizablePanel>
  )
}

export default SecondaryNav