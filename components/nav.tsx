"use client";

import {
  Chat as ChatIcon,
  Database as DatabaseIcon,
  Gear as GearIcon,
  ListMagnifyingGlass as ListMagnifyingGlassIcon
  } from "@phosphor-icons/react"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const Nav = ({ isCollapsed } : { isCollapsed : boolean }) => {

  interface LinkInterface {
    title: string,
    label: string,
    icon: any,
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
  }

  const links: LinkInterface[] = [
    {
      title: "Connections",
      label: "3",
      icon: DatabaseIcon,
      variant: "default",
    },
    {
      title: "Queries",
      label: "12",
      icon: ListMagnifyingGlassIcon,
      variant: "ghost",
    },
    {
      title: "Settings",
      label: "",
      icon: GearIcon,
      variant: "ghost",
    },
    {
      title: "Feedback",
      label: "",
      icon: ChatIcon,
      variant: "ghost"
    }
  ]

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                  )}
                >
                  <link.icon className="size-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href="#"
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start",
              )}
            >
              <link.icon className="mr-2 size-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white",
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
};

export default Nav;
