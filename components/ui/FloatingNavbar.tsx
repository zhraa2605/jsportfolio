"use client";
import React from "react";
import { cn } from "./../../lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-gray-800 dark:text-white hover:text-purple dark:hover:text-purple-dark transition-colors"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-sm font-medium">{navItem.name}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
