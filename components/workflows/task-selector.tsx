"use client";

import { Database, FileText, Mail, RefreshCw, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";


interface TaskSelectorProps {
    onSelect: (type: string, title: string, description: string) => void
    onCancel: () => void
};

export function TaskSelector({ onSelect, onCancel }: TaskSelectorProps) {
    const tasks = [
        {
          type: "data",
          title: "Data Processing",
          description: "Process and transform data",
          icon: <Database className="h-5 w-5" />,
        },
        {
          type: "file",
          title: "File Operation",
          description: "Manage files and directories",
          icon: <FileText className="h-5 w-5" />,
        },
        {
          type: "integration",
          title: "API Integration",
          description: "Connect with external services",
          icon: <RefreshCw className="h-5 w-5" />,
        },
        {
          type: "notification",
          title: "Send Notification",
          description: "Send emails or notifications",
          icon: <Mail className="h-5 w-5" />,
        },
    ]
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Select Task Type</CardTitle>
                <Button variant={"ghost"} size={"icon"} onClick={onCancel}><X className="w-4 h-4"/></Button>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.map((task) => (
                <Button
                  key={task.type}
                  variant="outline"
                  className="flex items-center justify-start h-auto p-4"
                  onClick={() => onSelect(task.type, task.title, task.description)}
                >
                  <div className="rounded-full bg-muted p-2 mr-4">{task.icon}</div>
                  <div className="text-left">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-xs text-muted-foreground">{task.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
    )
}