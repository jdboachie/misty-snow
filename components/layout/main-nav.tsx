'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import * as React from 'react'
import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
// import { DbexIcon } from "@/components/icons"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ResizablePanel } from "@/components/ui/resizable";
import { signOut, signIn, useSession } from "next-auth/react";
import { DotsThree as DotsThreeIcon } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Empty } from "../ui/empty";

const MainNav = () => {

  // will get these from cookies later
  const defaultCollapsed = false;
  const defaultLayout = [17, 23, 60];
  const navCollapsedSize = 4;

  const { data } = useSession()

  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(defaultCollapsed);

  return (
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
      <div className="p-2 grid">
        <div className="flex gap-2">
          {/* <DbexIcon className="size-5 -rotate-6 text-primary" /> */}
          <Empty className="size-9" />
        </div>
      </div>
      <Separator />
      <div className="">
        <Nav isCollapsed={isCollapsed} />
      </div>
      <Separator />
      <div className="grow p-2 py-4">

      </div>
      <Separator />
      <div className="grid">
        {data?.user ?
        <div className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full p-2">
              <Button size="default" variant={'ghost'} className="flex px-1 w-full justify-between  h-10">
                <div className="flex gap-2 items-center">
                  <Avatar className="border">
                    <AvatarImage src={data?.user.image || 'jude.png'} alt="@shadcn" />
                    <AvatarFallback>JB</AvatarFallback>
                  </Avatar>
                  <div className="grow pt-0.5">
                    <p className="text-sm truncate">{data?.user.name}</p>
                  </div>
                </div>
                <DotsThreeIcon className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-0 grid">
                <Button
                  variant={'ghost'}
                  className="p-0 px-1.5 flex justify-start font-normal"
                  onClick={() => signOut()}>Sign Out</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        :
        <div className="p-2">
          <Button
            variant={'ghost'}
            className="p-0 px-1.5 flex justify-start font-normal"
            onClick={() => signIn()}
            >
            Sign In
          </Button>
        </div>
        }
      </div>
    </ResizablePanel>
  )
}

export default MainNav