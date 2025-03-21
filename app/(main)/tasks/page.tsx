import { SearchInput } from "@/components/form/SearchInput";
import { TaskList } from "@/components/tasks/task-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function TasksPage() {
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
            <div className="pt-2">
                <TaskList />
            </div>
        </div>
    )
}