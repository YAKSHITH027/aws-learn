"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { Bell, MessageCircle, Plus, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();

  const isDashboardPage =
    pathname.includes("/managers") || pathname.includes("/tenants");

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      {/* Background with modern glassmorphism effect */}
      <div
        className={`absolute inset-0 backdrop-blur-xl border-b shadow-2xl ${
          isDashboardPage
            ? "bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 bg-opacity-95 border-primary-600/20"
            : "bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 border-slate-700/30"
        }`}
      />

      <div className="relative flex justify-between items-center w-full h-full px-4 sm:px-6 lg:px-8">
        {/* Left section */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          {isDashboardPage && (
            <div className="sm:hidden">
              <SidebarTrigger />
            </div>
          )}

          {/* Logo */}
          <Link
            href="/"
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
            scroll={false}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <Image
                  src="/logo.svg"
                  alt="Renthub Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-secondary-500/20 rounded-full blur-sm group-hover:bg-secondary-500/30 transition-all duration-300" />
              </div>
              <div className="text-lg sm:text-xl font-bold tracking-wide">
                <span
                  className={`transition-colors duration-300 ${
                    isDashboardPage
                      ? "text-white group-hover:text-primary-100"
                      : "text-white group-hover:text-blue-200"
                  }`}
                >
                  RENT
                </span>
                <span
                  className={` transition-colors duration-300 font-semibold ${
                    isDashboardPage
                      ? "text-secondary-400 group-hover:text-secondary-300"
                      : "text-blue-400 group-hover:text-blue-300"
                  }`}
                >
                  HUB
                </span>
              </div>
            </div>
          </Link>

          {/* Action Button */}
          {isDashboardPage && authUser && (
            <Button
              variant="secondary"
              className="ml-2 sm:ml-4 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl px-3 sm:px-4 py-2"
              onClick={() =>
                router.push(
                  authUser.userRole?.toLowerCase() === "manager"
                    ? "/managers/newproperty"
                    : "/search"
                )
              }
            >
              {authUser.userRole?.toLowerCase() === "manager" ? (
                <>
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:block ml-2 font-medium">
                    Add Property
                  </span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:block ml-2 font-medium">
                    Search
                  </span>
                </>
              )}
            </Button>
          )}
        </div>

        {/* Center section - Tagline */}
        {!isDashboardPage && (
          <div className="hidden lg:block flex-1 text-center">
            <p className="text-slate-300/90 text-sm font-medium max-w-md mx-auto">
              Discover your perfect rental apartment with our advanced search
            </p>
          </div>
        )}

        {/* Right section */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          {authUser ? (
            <>
              {/* Notifications */}
              <div className="relative hidden md:block group">
                <div
                  className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    isDashboardPage
                      ? "bg-primary-600/30 hover:bg-primary-600/50"
                      : "bg-slate-700/40 hover:bg-slate-600/50"
                  }`}
                >
                  <MessageCircle
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isDashboardPage
                        ? "text-primary-200 group-hover:text-white"
                        : "text-slate-300 group-hover:text-white"
                    }`}
                  />
                </div>
                <span
                  className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 animate-pulse ${
                    isDashboardPage
                      ? "bg-secondary-500 border-primary-700"
                      : "bg-blue-500 border-slate-700"
                  }`}
                />
              </div>

              <div className="relative hidden md:block group">
                <div
                  className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                    isDashboardPage
                      ? "bg-primary-600/30 hover:bg-primary-600/50"
                      : "bg-slate-700/40 hover:bg-slate-600/50"
                  }`}
                >
                  <Bell
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isDashboardPage
                        ? "text-primary-200 group-hover:text-white"
                        : "text-slate-300 group-hover:text-white"
                    }`}
                  />
                </div>
                <span
                  className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 animate-pulse ${
                    isDashboardPage
                      ? "bg-secondary-500 border-primary-700"
                      : "bg-blue-500 border-slate-700"
                  }`}
                />
              </div>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none group">
                  <div className="relative">
                    <Avatar
                      className={`w-8 h-8 sm:w-9 sm:h-9 ring-2 transition-all duration-300 ${
                        isDashboardPage
                          ? "ring-primary-600/50 group-hover:ring-secondary-500/50"
                          : "ring-slate-600/50 group-hover:ring-blue-500/50"
                      }`}
                    >
                      <AvatarImage src={authUser.userInfo?.image} />
                      <AvatarFallback
                        className={`text-white font-semibold ${
                          isDashboardPage
                            ? "bg-gradient-to-br from-primary-600 to-primary-700"
                            : "bg-gradient-to-br from-slate-600 to-slate-700"
                        }`}
                      >
                        {authUser.userRole?.[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute inset-0 rounded-full blur-sm transition-all duration-300 ${
                        isDashboardPage
                          ? "bg-secondary-500/20 group-hover:bg-secondary-500/30"
                          : "bg-blue-500/20 group-hover:bg-blue-500/30"
                      }`}
                    />
                  </div>
                  <div className="hidden sm:flex items-center gap-1">
                    <p
                      className={`transition-colors duration-300 font-medium text-sm ${
                        isDashboardPage
                          ? "text-primary-200 group-hover:text-white"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {authUser.userInfo?.name}
                    </p>
                    <ChevronDown
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isDashboardPage
                          ? "text-primary-300 group-hover:text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-primary-200/50 shadow-2xl rounded-xl mt-2 min-w-[200px]">
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-800 hover:text-white font-medium rounded-lg mx-1 my-1 transition-all duration-300"
                    onClick={() =>
                      router.push(
                        authUser.userRole?.toLowerCase() === "manager"
                          ? "/managers/properties"
                          : "/tenants/favorites",
                        { scroll: false }
                      )
                    }
                  >
                    <div className="flex items-center gap-3 py-2">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                      Go to Dashboard
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary-200/50 mx-2" />
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-800 hover:text-white rounded-lg mx-1 my-1 transition-all duration-300"
                    onClick={() =>
                      router.push(
                        `/${authUser.userRole?.toLowerCase()}s/settings`,
                        { scroll: false }
                      )
                    }
                  >
                    <div className="flex items-center gap-3 py-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      Settings
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white rounded-lg mx-1 my-1 transition-all duration-300"
                    onClick={handleSignOut}
                  >
                    <div className="flex items-center gap-3 py-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      Sign out
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {/* Sign In Button */}
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="text-white border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-slate-800 rounded-xl px-4 py-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </Button>
              </Link>

              {/* Sign Up Button */}
              <Link href="/signup">
                <Button
                  variant="secondary"
                  className="text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0 rounded-xl px-4 py-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
