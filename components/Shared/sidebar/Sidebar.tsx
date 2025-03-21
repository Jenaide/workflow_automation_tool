"use client";

import { BlocksIcon, Clipboard, GalleryVerticalEnd, GitBranchPlusIcon, LayoutDashboardIcon, Logs, LogsIcon, Settings2, Workflow } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


// Project data
const NavLinks = [
    {
      
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboardIcon size={18} />,
    },
    {
      
      name: "Workflows",
      path: "/workflows",
      icon: <Workflow size={18} />,
    },
    {
      
      name: "Tasks",
      path: "/tasks",
      icon: <Clipboard size={18} />,
    },
    {
      
      name: "Orders",
      path: "/orders",
      icon: <LogsIcon size={18} />,
    },
    {
      
      name: "Integrations",
      path: "/integrations",
      icon: <BlocksIcon size={18} />,
    },
    {
      
      name: "Automation",
      path: "/automation",
      icon: <GitBranchPlusIcon size={18} />,
    },
    {
      
      name: "Logs",
      path: "/logs",
      icon: <Logs size={18} />,
    },
    {
      
      name: "Settings",
      path: "/settings",
      icon: <Settings2 size={18} />,
    },
]
export function Sidebar() {
    const pathname = usePathname();
    return (
        <div >
            <div className="w-full h-[60px] flex items-center px-4 gap-2">
                <GalleryVerticalEnd className="size-6"/>
                <h2 className="text-xl font-semibold tracking-wide">FlowPilot</h2>
            </div>

            <div className="p-3">
                {NavLinks.map((navItem, index) => (
                <Link 
                    href={navItem.path} 
                    key={index}
                    className={`link ${pathname===navItem.path || pathname.includes(navItem.path) 
                        ? "bg-accent dark:bg-slate-900 text-[#3c51d7]" 
                        : "text-muted-foreground" } w-full flex items-center gap-2 px-3.5 py-3 rounded-md text-sm mb-2.5`}
                    >
                    <span>{navItem.icon}</span>
                    {navItem.name}
                </Link>
                ))}
            </div>
        </div>
    )
}