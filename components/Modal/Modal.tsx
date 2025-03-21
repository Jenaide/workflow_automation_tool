"use client";

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import clsx from "clsx";

interface ModalProps{
    children: React.ReactNode;
    trigger: React.ReactNode;
    classes?: string;
    title: string;
    description: string;
}

export function Modal({ children, trigger, classes, title, description }: ModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={clsx(classes)}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>

    )
}