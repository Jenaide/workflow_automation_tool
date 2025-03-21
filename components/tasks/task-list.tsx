"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Edit, Pause, Play, Trash } from "lucide-react";
import Link from "next/link";

type Task = {
    id: string
    name: string
    workflow: string
    status: "running" | "paused" | "completed" | "failed"
    schedule: string
    lastRun: string
    nextRun: string
};

const mockTasks: Task[] = [
    {
      id: "1",
      name: "Daily Data Sync",
      workflow: "Data Synchronization",
      status: "running",
      schedule: "Daily at 09:00 AM",
      lastRun: "Today at 09:00 AM",
      nextRun: "Tomorrow at 09:00 AM",
    },
    {
      id: "2",
      name: "Weekly Backup",
      workflow: "File Backup",
      status: "paused",
      schedule: "Weekly on Sunday",
      lastRun: "Last Sunday",
      nextRun: "N/A",
    },
    {
      id: "3",
      name: "Monthly Report",
      workflow: "Report Generation",
      status: "completed",
      schedule: "Monthly on 1st",
      lastRun: "01/03/2023",
      nextRun: "01/04/2023",
    },
    {
      id: "4",
      name: "API Health Check",
      workflow: "System Monitoring",
      status: "failed",
      schedule: "Every hour",
      lastRun: "Today at 02:00 PM",
      nextRun: "Today at 03:00 PM",
    },
]
export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(mockTasks);

    const toggleStatus = (id: string) => {
        setTasks(
          tasks.map((task) => {
            if (task.id === id) {
              const newStatus = task.status === "running" ? "paused" : "running"
              return { ...task, status: newStatus }
            }
            return task
          }),
        )
    }
    
    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id))
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Schedule Tasks</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Workflow</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Schedule</TableHead>
                            <TableHead>Last Run</TableHead>
                            <TableHead>Next Run</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell className="font-medium">{task.name}</TableCell>
                                <TableCell>{task.workflow}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            task.status === 'running'
                                            ? 'default'
                                            : task.status === 'paused'
                                            ? 'secondary'
                                            : task.status === 'completed'
                                            ? 'outline'
                                            : 'destructive'
                                        }
                                    >
                                        {task.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{task.schedule}</TableCell>
                                <TableCell>{task.lastRun}</TableCell>
                                <TableCell>{task.nextRun}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant={"outline"} size={"icon"} onClick={() => toggleStatus(task.id)}>
                                            {task.status === 'running' ? <Pause className="w-4 h-4" /> :
                                                <Play className="w-4 h-4" />
                                            }
                                        </Button>
                                        <Button variant={"outline"} size={"icon"} asChild>
                                            <Link href={`/tasks/${task.id}`}>
                                                <Edit className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                        <Button variant={"outline"} size={"icon"} onClick={() => deleteTask(task.id)}>
                                            <Trash className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}