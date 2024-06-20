"use client";

import {
  House as HomeIcon,
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
import { usePathname } from "next/navigation";
// import { HomeIcon } from "@radix-ui/react-icons";


const Nav = ({ isCollapsed } : { isCollapsed : boolean }) => {

  const pathname = usePathname()

  interface LinkInterface {
    title: string,
    label: string,
    icon: any,
    href?: string,
    // variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
  }

  const links: LinkInterface[] = [
    {
      title: "Home",
      label: "",
      icon: HomeIcon,
      href: '/app/home'
    }
    ,
    {
      title: "Connections",
      label: "3",
      icon: DatabaseIcon,
      href: '/app/connections',
    },
    {
      title: "Queries",
      label: "12",
      icon: ListMagnifyingGlassIcon,
      href: '/app/queries',
    },
    {
      title: "Settings",
      label: "",
      icon: GearIcon,
    },
    {
      title: "Feedback",
      label: "",
      icon: ChatIcon,
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
                  href={link.href || '#'}
                  className={cn(
                    buttonVariants({ variant: pathname === link.href ? 'secondary': 'ghost', size: "icon" }),
                    "h-9 w-9",
                    pathname === link.href &&
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
              href={link.href || '#'}
              className={cn(
                buttonVariants({ variant: pathname === link.href ? 'secondary': 'ghost', size: "default" }),
                pathname === link.href &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start",
                pathname !== link.href &&
                "text-primary/70"
              )}
            >
              <link.icon className="mr-2 size-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    pathname === link.href &&
                      "",
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
