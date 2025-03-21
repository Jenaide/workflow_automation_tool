import React from "react";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

interface SelectBoxProps{
    value: string;
    onChange: (value: string) => void;
    label?: string;
    children: React.ReactNode;
    placeHolder: string;
    disabled?: boolean;
}
export function SelectBox({ value, onChange, label, children, placeHolder, disabled=false }: SelectBoxProps) {
    return (
        <div>
            {label && (
                <Label className="text-sm font-medium mb-2 block">{label}</Label>
            )}

            <Select onValueChange={onChange} value={value} disabled={disabled}>
                <SelectTrigger className="text-sm font-normal placeholder:font-light focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-muted/50">
                    <SelectValue
                    
                        placeholder={placeHolder}>
                            {value && typeof value === "string" && value.charAt(0).toUpperCase() + value.slice(1) || value || placeHolder}
                        </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {children}
                </SelectContent>
            </Select>
        </div>
    )
}