"use client";

import { Button } from "@/components/ui/button";
import { Eye, Files, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function WorkflowActions() {
    const [loading, setloading] = useState(false);

    const handleDelete = async() => {
        setloading(true)
        console.log("delete")
    }
    return (
        <div className="flex flex-col">
            <Link 
                href={"/automation/1"} 
                className="flex items-center gap-2 ml-6 text-sm font-medium hover:bg-muted/50 px-4 py-2 w-full"
            >
                <Eye size={18}  className="text-muted-foreground" /> View
            </Link>
            <Button 
                variant={"ghost"} 
                className="flex items-center gap-2 text-sm mr-2 font-medium hover:bg-muted/50 px-3 py-2.5 w-full"
            >
                <Files size={18}  className="text-muted-foreground" /> Copy
            </Button>
            <Button 
                onClick={handleDelete} 
                disabled={loading} 
                variant={"ghost"} 
                className="flex items-center gap-2 text-sm font-medium text-rose-600 hover:bg-muted/50 px-4 py-2.5 w-full"
            >
                <Trash size={18}  className="text-rose-600" /> Delete
            </Button>
        </div>
    )
}