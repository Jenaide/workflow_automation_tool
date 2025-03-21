"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Plus } from "lucide-react";
import { WorkflowNode } from "./workflow-node";
import { Button } from "../ui/button";
import { TaskSelector } from "./task-selector";

type Node = {
    id: string;
    type: string;
    title: string;
    description: string;
};


export function WorkflowCanvas() {
    const [nodes, setNodes] = useState<Node[]>([
        {
            id: "1",
            type: "trigger",
            title: "Start",
            description: "Begin workflow execution"
        },
    ])

    const [showTaskSelector, setshowTaskSelector] = useState(false);

    const addNode = (type: string, title: string, description: string) => {
        const newNode = {
            id: (nodes.length + 1).toString(),
            type,
            title,
            description,
        }
        setNodes([ ...nodes, newNode ])
        setshowTaskSelector(false)
    };

    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-center space-y-4">
                    {nodes.map((node, index) => (
                        <div key={node.id} className="w-full">
                            <WorkflowNode node={node} />
                            {index < nodes.length -1 && (
                                <div className="flex justify-center my-2">
                                    <ArrowRight className="h-6 w-6 text-muted-foreground"/>
                                </div>
                            )}
                        </div>
                    ))}

                    {!showTaskSelector ? (
                        <Button variant={"outline"} onClick={() => setshowTaskSelector(true)} className="mt-4">
                            <Plus className="mr-2 w-4 h-4" /> Add Task
                        </Button>
                    ) : (
                        <TaskSelector
                            onSelect={(type, title, description) => addNode(type, title, description)}
                            onCancel={() => setshowTaskSelector(false)}
                        />
                    )}
                </div>
            </CardContent>
        </Card>
    )
};