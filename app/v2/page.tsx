"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggleAlt } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Nav from "@/components/nav";
import { Input } from "@/components/ui/input";
import {
  MagnifyingGlass as MagnifyingGlassIcon,
  DotsThree as DotsThreeIcon,
} from "@phosphor-icons/react";
import { Separator } from "@/components/ui/separator";
import { MongoDBIcon } from "@/components/icons/icons"
import QueryTool from "@/components/tools/querytool";
import Collections from "@/components/Collections"

export default function Home() {
  const defaultCollapsed = false;
  const defaultLayout = [17, 23, 60];
  const navCollapsedSize = 4;
  const [isCollapsed, setIsCollapsed] =
    React.useState<boolean>(defaultCollapsed);

  return (
    <main className="h-screen size-full p-2 bg-secondary text-sm">
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes,
          )}`;
        }}
        className="bg-background shadow-xl grid size-full items-stretch border rounded-md"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={12}
          maxSize={25}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed,
            )}`;
          }}
          onExpand={() => {
            setIsCollapsed(false);
          }}
          className={cn(
            "flex flex-col",
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out",
          )}
        >
          <div className="p-2">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="knust_student_data" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Postgres</SelectLabel>
                <SelectItem value="est">knust_student_data</SelectItem>
                <SelectItem value="cst">lab_pal</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>MongoDB</SelectLabel>
                <SelectItem value="awst">
                  mongodb_atlas_83298322db
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
          <Separator />
          <div className="">
            <Nav isCollapsed={isCollapsed} />
          </div>
          <Separator />
            <Collections></Collections>
          <Separator />

          <div className="flex items-center gap-2 p-2 fixed bottom-2">
            <Avatar className="border">
              <AvatarImage src="jude.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grow pt-0.5">
              <p className="text-sm truncate font-bold">Jude Boachie</p>
            </div>
            <Button size="icon" variant={'ghost'}>
              <DotsThreeIcon className="size-5" />
            </Button>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={defaultLayout[1]}
          minSize={20}
          // maxSize={25}
        >
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
                  <div className="py-4 px-2 flex gap-2 items-center font-normal border shadow-none rounded-lg dark:bg-primary-foreground">
                    <MongoDBIcon className="size-9" />
                    <div className="grid gap-1 w-full">
                      <div className="flex flex-row justify-between">
                        <span className="text-base font-bold">product_data</span>
                        <span className="text-gray-300">2min ago</span>
                      </div>
                      <div className="flex w-full pr-2 justify-between items-center text-xs font-normal">
                        <div className="flex gap-2 items-center">
                          <div className="size-2 bg-green-500 rounded-full"/>
                          <span className="lowercase text-sm">Connected</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
          {/* <ThemeToggleAlt /> */}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <div className="size-full">
            <QueryTool />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
