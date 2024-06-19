"use client";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Home03Icon as HomeIcon,
  Database02Icon as DatabaseIcon,
  SearchList02Icon as ListMagnifyingGlassIcon,
  Settings02Icon as GearIcon,
  Comment01Icon as ChatTextIcon,
  Layout02Icon as TableIcon,
} from "hugeicons-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { useState } from "react";

const Nav = ({ isCollapsed }: { isCollapsed: boolean }) => {

  interface LinkInterface {
    title: string,
    label: string,
    icon: any,
    href: string,
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
  }

  const getPathName = () => {
    let pathName = usePathname().toLowerCase();
    if (pathName == "/v2") return "Connections"
    else if (pathName == "/home") return "Home"
    return "Queries"
  }
  const [activeLink, setActiveLink] = useState(getPathName());

  const links: LinkInterface[] = [
    {
      title: "Home",
      label: "",
      icon: HomeIcon,
      variant: `${activeLink === "Home" ? "default" : "ghost"}`,
      href: '/home'
    },
    {
      title: "Connections",
      label: "3",
      icon: DatabaseIcon,
      variant: `${activeLink === "Connections" ? "default" : "ghost"}`,
      href: '/v2'
    },
    {
      title: "Queries",
      label: "12",
      icon: ListMagnifyingGlassIcon,
      variant: `${activeLink === "Queries" ? "default" : "ghost"}`,
      href: '/queries'
    },
    {
      title: "Settings",
      label: "",
      icon: GearIcon,
      variant: `${activeLink === "Settings" ? "default" : "ghost"}`,
      href: ''
    },
    {
      title: "Feedback",
      label: "",
      icon: ChatTextIcon,
      variant: `${activeLink === "Feedback" ? "default" : "ghost"}`,
      href: ''
    },
    {
      title: "Collections",
      label: "",
      icon: TableIcon,
      variant: "ghost",
      href: ''
    }
  ]

  const handleActiveLink = (title: string) => {
    setActiveLink(title);
    links.map(link => {
      if (link.title === title) {
        link.variant = "default";
      } else {
        link.variant = "ghost";
      }
    })
  }


  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  onClick={handleActiveLink.bind(this, link.title)}
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                  )}
                >
                  <link.icon className="h-4 w-4" />
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
              href={link.href}
              onClick={handleActiveLink.bind(this, link.title)}
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start",
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
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

        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>


      </nav>
    </div>
  );
};

export default Nav;
