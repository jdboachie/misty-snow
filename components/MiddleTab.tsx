import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    ContextMenuShortcut,
    ContextMenuSeparator,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuCheckboxItem,
  } from "@/components/ui/context-menu"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  
  import { Input } from "@/components/ui/input";
  import {
    MagnifyingGlass as MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";

interface AppProps{
    children: React.ReactNode
}
export const MiddleTab = ({children}: AppProps) => {
    
    return(
        <Tabs defaultValue="all">
            <div className="flex items-center py-2 px-4">
              <h1 className="text-sm font-semibold">Connections</h1>
              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="active"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Active
                </TabsTrigger>
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
              <ContextMenu>
                
                <ContextMenuTrigger>
                  {children}
                </ContextMenuTrigger>

                <ContextMenuContent className="w-56">
                  <ContextMenuCheckboxItem checked>
                    Connect
                    <ContextMenuShortcut>⌘⇧C</ContextMenuShortcut>
                  </ContextMenuCheckboxItem>
                  <ContextMenuItem inset>View</ContextMenuItem>
                  <ContextMenuItem inset>Delete</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuSub>
                    <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-48">
                      <ContextMenuItem>
                        Save Page As...
                        <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                      <ContextMenuItem>Name Window...</ContextMenuItem>
                      <ContextMenuSeparator />
                      <ContextMenuItem>Developer Tools</ContextMenuItem>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                </ContextMenuContent>

              </ContextMenu>
            </TabsContent>

            <TabsContent value="active" className="m-0">
              <div className="p-2">a list of ACTIVE connections here</div>
            </TabsContent>
          </Tabs>
    )
}