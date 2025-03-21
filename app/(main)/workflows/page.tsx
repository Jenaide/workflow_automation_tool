import { SearchInput } from "@/components/form/SearchInput";
import { Button } from "@/components/ui/button";

import { WorkflowList } from "@/components/workflows/workflow-list";
import { Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Workflows | Automation Tool",
    description: "Manage your automation workflows",
};

export default function WorkflowsPage() {
    return (
        <div className="p-4 bg-[#eeeff8] dark:bg-[#12152e]">
            <div className="flex items-center justify-between">
                <SearchInput placeholder={"Search workflows..."} />
                <Button variant={"secondary"} asChild>
                    <Link href={"/workflows/new"}>
                        <Plus className="w-4 h-4"/>
                    </Link>
                </Button>
            </div>
            <WorkflowList />
        </div>
    )
};