"use client";
import { Switch } from "@/components/ui/switch";
import { useState } from "react"

export function PublishSwitcher() {

    const [isPublished, setIsPublished] = useState(false);

    const onPublishChange = async (value: boolean) => {
        setIsPublished(value);
    };

    return (
        <Switch checked={isPublished} onCheckedChange={onPublishChange} />
    )
}