"use client";
import {
  CirclePlus,
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
  BellRing,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <nav className="p-4 bg-primary-foreground">
      <div className="flex items-center justify-between">
        {/* Left: Sidebar Trigger and Search */}
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          {/* Search Input (Hidden on small screens) */}
          <div className="relative hidden sm:flex">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-[200px] md:w-[250px] lg:w-[300px]"
            />
          </div>
          {/* Search Icon (Visible on small screens) */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={toggleSearch}
            aria-label={isSearchOpen ? "Close search" : "Open search"}
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </Button>
        </div>

        {/* Right: Create Button, Notifications, Theme, User */}
        <div className="flex items-center gap-2">
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white flex items-center gap-2 text-sm px-3 py-1"
            size="sm"
          >
            <CirclePlus size={16} />
            Create
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <BellRing size={20} />
          </Button>
          {/* Theme Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
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
          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="w-[1.2rem] h-[1.2rem] mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-[1.2rem] h-[1.2rem] mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut className="w-[1.2rem] h-[1.2rem] mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Collapsible Search Input for Small Screens */}
      {isSearchOpen && (
        <div className="mt-4 sm:hidden">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full"
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
