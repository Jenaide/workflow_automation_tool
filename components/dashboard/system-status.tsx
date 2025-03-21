import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Activity, Database, HardDrive, Server } from "lucide-react";

interface SystemStatusProps {
    className?: string;
};

export function SystemStatus({ className }: SystemStatusProps) {
    return (
        <Card className={cn(className)}>
            <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current status of your automation infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                        <Server className="h-6 w-6 text-green-500 mb-2" />
                        <div className="text-sm font-medium">Server</div>
                        <div className="text-xs text-muted-foreground">Online</div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                        <Database className="h-6 w-6 text-green-500 mb-2" />
                        <div className="text-sm font-medium">Database</div>
                        <div className="text-xs text-muted-foreground">Connected</div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                        <Activity className="h-6 w-6 text-green-500 mb-2" />
                        <div className="text-sm font-medium">API</div>
                        <div className="text-xs text-muted-foreground">Operational</div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg border p-4">
                        <HardDrive className="h-6 w-6 text-green-500 mb-2" />
                        <div className="text-sm font-medium">Storage</div>
                        <div className="text-xs text-muted-foreground">75% Used</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}