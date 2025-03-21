"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Copy, Edit, Pause, Play, Trash } from "lucide-react";
import Link from "next/link";

type Workflow = {
    id: string;
    name: string;
    description: string;
    status: "active" | "inactive" | "draft";
    lastRun: string;
    nextRun: string;
};

const mockWorkflows: Workflow[] = [
    {
      id: "1",
      name: "Data Synchronization",
      description: "Sync data between CRM and marketing platform",
      status: "active",
      lastRun: "Today at 09:00 AM",
      nextRun: "Tomorrow at 09:00 AM",
    },
    {
      id: "2",
      name: "File Backup",
      description: "Backup important files to cloud storage",
      status: "active",
      lastRun: "Today at 01:00 AM",
      nextRun: "Tomorrow at 01:00 AM",
    },
    {
      id: "3",
      name: "Report Generation",
      description: "Generate weekly performance reports",
      status: "inactive",
      lastRun: "Last week",
      nextRun: "N/A",
    },
    {
      id: "4",
      name: "Email Campaign",
      description: "Send automated email campaigns",
      status: "draft",
      lastRun: "Never",
      nextRun: "N/A",
    },
]

export function WorkflowList() {
    const [workflows, setWorkflows] = useState<Workflow[]>(mockWorkflows);

    const toggleStatus = (id: string) => {
        setWorkflows(
            workflows.map((workflow) => {
                if (workflow.id === id) {
                    const newStatus = workflow.status === 'active' ? 'inactive' : 'active'
                    return { ...workflow, status: newStatus }
                }
                return workflow;
            }),
        )
    };

    const deleteWorkflow = (id: string) => {
        setWorkflows(workflows.filter((workflow) => workflow.id !== id))
    };

    return (
        <div className="scrollbar bg-background mt-6 overflow-y-hidden pb-6 h-[calc(100vh-157px)] border border-input rounded-lg">
            <div className="grid gap-2 p-2 md:grid-cols-2 lg:grid-cols-3">
                {workflows.map((workflow) => (
                    <Card key={workflow.id}>
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                                <CardTitle>{workflow.name}</CardTitle>
                                <Badge
                                    variant={
                                        workflow.status === 'active' ? 'default' : workflow.status
                                        === 'inactive' ? 'secondary' : 'outline'
                                    }
                                >
                                    {workflow.status}
                                </Badge>
                            </div>
                            <CardDescription>{workflow.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Last run:</span>
                                    <span>{workflow.lastRun}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Next run:</span>
                                    <span>{workflow.nextRun}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant={"outline"} size={"icon"} onClick={() => toggleStatus(workflow.id)}>
                                {workflow.status === 'active' ? <Pause className="w-4 h-4"/> : <Play className="w-4 h-4"/>}
                            </Button>
                            <div className="flex gap-2">
                                <Button variant={"outline"} size={"icon"}>
                                    <Copy className="w-4 h-4"/>
                                </Button>
                                <Button variant={"outline"} size={"icon"} asChild>
                                    <Link href={`/workflows/${workflow.id}/edit`}>
                                        <Edit className="w-4 h-4"/>
                                    </Link>
                                </Button>
                                <Button variant={"outline"} size={"icon"} onClick={() => deleteWorkflow(workflow.id)}>
                                    <Trash className="w-4 h-4"/>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}