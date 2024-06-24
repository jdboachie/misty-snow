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
import { useSession } from "next-auth/react";
import { DotsThree as DotsThreeIcon } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Empty } from "../ui/empty";
import { ThemeToggle } from "../theme/theme-toggle";
import UserButtonSkeleton from "../closet/skeletons/UserButtonSkeleton";
import { SignOut } from "../auth/client";
import { CommandDialogButton } from "../command-dialog";

const MainNav = ({defaultSize, defaultCollapsed}: {defaultSize: number, defaultCollapsed: boolean}) => {

  const navCollapsedSize = 4;
  const { data } = useSession()
  const resolvedSize = defaultCollapsed ? navCollapsedSize : defaultSize

  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(defaultCollapsed);

  return (
    <ResizablePanel
      defaultSize={resolvedSize}
      collapsedSize={navCollapsedSize}
      collapsible={true}
      minSize={4}
      maxSize={25}
      onCollapse={() => {
        setIsCollapsed(true);
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          true,
        )}`;
      }}
      onExpand={() => {
        setIsCollapsed(false);
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          false,
        )}`;
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
      <div className="grow p-2">
        <CommandDialogButton />
      </div>
      <Separator />
      <div className="grid">
        {data?.user ?
        <div className={cn(
          "w-full grid grid-flow-col p-2",
          isCollapsed && 'px-1'
          )}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                size={isCollapsed ? 'icon' : 'default'}
                variant={'ghost'}
                className={cn(
                  "flex px-1 w-full h-10",
                  isCollapsed ? 'justify-center w-fit mx-auto' : 'justify-between'
                )}
              >
                <div className={cn("flex items-center w-full", isCollapsed && 'w-fit')}>
                  <Avatar>
                    <AvatarImage
                      src={data?.user.image || 'jude.png'}
                      alt="user avatar"
                    />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <div className={isCollapsed ? 'hidden': 'flex w-full justify-between ml-2'}>
                    <p className="text-xs text-start text-muted-foreground truncate grow pt-0.5">{data?.user.name}</p>
                    <DotsThreeIcon className="size-5" />
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-0">
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        :
        <div className="p-2">
          <UserButtonSkeleton collapsed={isCollapsed} />
        </div>
        }
      </div>
    </ResizablePanel>
  )
}

export default MainNav