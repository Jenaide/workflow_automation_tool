import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { FileText, Play, Plus, RefreshCw } from "lucide-react";

export function QuickActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common automation tasks</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-2">
                    <Button variant={"outline"} asChild className="justify-start gap-2">
                        <Link href={"/workflows/new"}>
                            <Plus className="w-4 h-4"/>
                            <span>New flow</span>
                        </Link>
                    </Button>
                    <Button variant={"outline"} className="justify-start gap-2">
                        <Play className="h-4 w-4"/>
                        <span>Run task</span>
                    </Button>
                    <Button variant={"outline"} className="justify-start gap-2">
                        <RefreshCw className="h-4 w-4"/>
                        <span>Sync data</span>
                    </Button>
                    <Button variant={"outline"} className="justify-start gap-2">
                        <FileText className="h-4 w-4"/>
                        <span>Report</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}