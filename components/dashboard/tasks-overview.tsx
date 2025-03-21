import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

interface TasksOverviewProps {
    className?: string;
};

export function TasksOverview({ className }: TasksOverviewProps) {
    return (
        <Card className={cn("col-span-2", className)}>
            <CardHeader>
                <CardTitle>Tasks Overview</CardTitle>
                <CardDescription>Monitor the status of your schedule tasks</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Data Synchronization</div>
                            <div className="text-sm text-muted-foreground">75%</div>
                        </div>
                        <Progress value={75}/>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">File Backup</div>
                            <div className="text-sm text-muted-foreground">100%</div>
                        </div>
                        <Progress value={100}/>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">System Monitoring</div>
                            <div className="text-sm text-muted-foreground">50%</div>
                        </div>
                        <Progress value={50}/>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Report Generation</div>
                            <div className="text-sm text-muted-foreground">25%</div>
                        </div>
                        <Progress value={25}/>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}