'use client'
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Nav from "@/components/nav";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { ResizablePanel } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";



import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { DotsThree as DotsThreeIcon } from "@phosphor-icons/react";

export default function LeftPane() {
    const defaultCollapsed = false;
    const defaultLayout = [17, 23, 60];

    const navCollapsedSize = 4;
    const [isCollapsed, setIsCollapsed] =
        React.useState<boolean>(defaultCollapsed);
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
            {/* left pane */}
            <>
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
                <Nav isCollapsed={isCollapsed} />
                <Separator />
                <div className="grow">
                    <div className="quick-access p-3">
                        Quick Access
                    </div>
                </div>
                <Separator />

                {/* User profile */}
                <div className="flex items-center gap-2 p-2 ">
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
            </>
        </ResizablePanel>


    )
}