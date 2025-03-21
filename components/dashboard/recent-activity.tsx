import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function RecentActivity() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>latest events from your automation tasks</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium">Daily Backup Completed</p>
                            <p className="text-xs text-muted-foreground">Today @ 09:00 AM</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-red-500" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium">API Integration Failed</p>
                            <p className="text-xs text-muted-foreground">Today @ 08:15 AM</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-500" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium">Report Generation Pending</p>
                            <p className="text-xs text-muted-foreground">Today @ 07:30 AM</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium">Data Sync Completed</p>
                            <p className="text-xs text-muted-foreground">Today @ 11:45 PM</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}