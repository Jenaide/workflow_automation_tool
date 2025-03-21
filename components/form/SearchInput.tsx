"use client"
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import React from "react";

interface SearchInputProps{
    placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log(value)
    };

    return (
        <div className="bg-background dark:bg-slate-900 flex items-center gap-2.5 px-3 py-[7px] border rounded-md">
            <SearchIcon size={16} className="text-muted-foreground"/>
            <Input
                onChange={handleOnChange}
                type="text" 
                placeholder={placeholder} 
                className="p-0 dark:bg-slate-900 border-none h-auto text-sm font-normal placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
                />
        </div>
    )
}