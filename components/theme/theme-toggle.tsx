"use client";

import * as React from "react";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggleAlt() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center px-px gap-px border rounded-full">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="icon"
        className="size-8 rounded-full"
        onClick={() => setTheme("light")}
      >
        <SunIcon />
      </Button>
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="icon"
        className="size-8 rounded-full"
        onClick={() => setTheme("system")}
      >
        <DesktopIcon />
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="icon"
        className="size-8 rounded-full"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon />
      </Button>
    </div>
  );
}
