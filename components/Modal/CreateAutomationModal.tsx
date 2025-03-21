"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Modal } from "./Modal";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { DialogClose, DialogFooter } from "../ui/dialog";

export function CreateAutomationModal() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    const handleSubmit = () => {
        setLoading(true);
        console.log("testing")
        setError(null);
    };

    const TriggerButton = (
        <Button 
            variant={"default"}>
                <Plus size={18} />
                Create Automation
        </Button>
    )
    return (
        <Modal
            title={"Create Automation"}
            description={"Guide your subscriber with automation and drop a name as a first step."}
            trigger={TriggerButton}
            classes={"max-w-[380px] w-full"}
        >
            <div className="my-7">
                <Input
                    onChange={handleInputChange}
                    placeholder="Automation name" 
                    required={true}
                    className="text-sm font-normal placeholder:font-light focus-visible:ring-0 focus-visible:ring-offset-0 bg-muted/50"
                />
                {error && <div className="text-destructive text-sm mt-2">{error}</div>}
            </div>
            <DialogFooter>
                <DialogClose asChild> 
                    <Button variant={"outline"} className="px-6">Cancel</Button>
                </DialogClose>
                <Button onClick={handleSubmit} variant={"default"} className="px-6" disabled={loading || !name}>{loading ? 'Creating...' : 'Start Creating'}</Button>
            </DialogFooter>
        </Modal>
    )
}