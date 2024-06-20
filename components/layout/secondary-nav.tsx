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
import ConnectionsView from '@/components/connectionsview'


function SecondaryNav() {
  const defaultLayout = [17, 23, 60];

  return (
    <ResizablePanel
      defaultSize={defaultLayout[1]}
      minSize={20}
      maxSize={30}
    >
      <Tabs defaultValue="all">
        <div className="grid py-2 px-4">
          {/* <h4 className="font-semibold">Connections</h4> */}
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
         <ConnectionsView />
        </TabsContent>
        <TabsContent value="active" className="m-0">
          <div className="p-2">a list of ACTIVE connections here</div>
        </TabsContent>
      </Tabs>
    </ResizablePanel>
  )
}

export default SecondaryNav