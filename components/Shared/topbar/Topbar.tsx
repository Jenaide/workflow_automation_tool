"use client";

import { ModeToggle } from "@/components/theme-toggler";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const pathInfo: Record<string, {path: string, subtitle: string}> = {
    dashboard: {
        path: "Dashboard",
        subtitle: "Analytics of your statistics."
    },
    orders: {
        path: "Orders",
        subtitle: "Database of FlowPilot tenders."
    },
    integrations: {
        path: "Integrations",
        subtitle: "Connect FlowPilot to your favourite tools and experience their power."
    },
    workflows: {
        path: "Workflows",
        subtitle: "Create and manage your automation workflows"
    },
    tasks: {
        path: "Tasks",
        subtitle: "Schedule and monitor your automation tasks."
    },
    logs: {
        path: "Logs",
        subtitle: "View system logs and activity."
    },
    settings: {
        path: "Settings",
        subtitle: "Configure your account and other settings."
    },
}

export function Topbar() {
    const pathname = usePathname();
    const currentPath = pathname.replace("/", "");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    return (
        <div className="w-full h-[60px] bg-background border-b flex items-center justify-between p-4">
            <div>
                {pathname.includes("automation") ? (
                    <div>
                        <h3 className="text-lg font-semibold">
                            {pathname.includes("automation/") ? "Workflow builder" : "Automation" }
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Automated workflow for effective actions.
                        </p>
                    </div>
                ) : pathInfo[currentPath] ? (
                    <div>
                        <h3 className="text-lg font-semibold">{pathInfo[currentPath].path}</h3>
                        <p className="text-sm text-muted-foreground">
                            {pathInfo[currentPath].subtitle}
                        </p>
                    </div>
                ) : (
                    <div>
                        <h3 className="text-lg font-semibold">Page Not Found</h3>
                        <p className="text-sm text-muted-foreground">This page does not exist.</p>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-6">
                <ModeToggle />

                {/* notifications */}
                {mounted && (
                    <Popover>
                        <PopoverTrigger className="cursor-pointer">
                            <span className="relative">
                                <Bell size={20}/>
                                <span className="absolute -top-1 right-0 z-10">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-spin absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                                    </span>
                                </span>
                            </span>
                        </PopoverTrigger>
                        <PopoverContent className="w-80" align="end">
                            Place content for notification here
                        </PopoverContent>
                    </Popover>
                )}

                {/* account popover */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-3 cursor-pointer">
                        <Avatar className="w-8 h-8">
                            <AvatarImage alt="profile-image" src="https://github.com/shadcn.png" />
                            <AvatarFallback>FP</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                            <div>
                                <h3 className="text-base font-medium">Jenaide Sibolie</h3>
                                <p className="text-sm font-normal text-muted-foreground">example@email.com</p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>My Account</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-1.5">
                            <Button className="w-full" variant={"outline"}>
                                Sign out
                            </Button>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
};