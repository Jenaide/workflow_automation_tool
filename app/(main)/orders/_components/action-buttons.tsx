"use client";
import { OrderModal } from "@/components/Modal/OrderModal";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";


export function ActionButtons() {

    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true)
        console.log("delete order")
    };

    const TriggerButton = (
        <Button variant={"ghost"} className="flex items-center gap-2 py2.5 text-sm font-medium hover:bg-muted/50 px-4 w-full">
            <Edit  size={18} className="text-muted-foreground"/> Edit
        </Button>
    );
    return (
        <div>
            <OrderModal trigger={TriggerButton} type="UPDATE" />
            <Button onClick={handleDelete} disabled={loading} variant={"ghost"} className="flex items-center gap-2 pt2.5 pb-3 text-sm text-rose-600 font-medium hover:bg-muted/50 px-4 w-full">
                <Trash2 size={18}  className="text-rose-600"/> Delete
            </Button>
        </div>
    )
}