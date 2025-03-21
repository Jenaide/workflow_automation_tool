import { Bell, Cog, Database, FileText, Mail, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

type Node = {
    id: string
    type: string
    title: string
    description: string
};

interface WorkflowNodeProps {
    node: Node;
}

export function WorkflowNode({node}: WorkflowNodeProps) {
    const getIcon = () => {
        switch (node.type) {
          case "trigger":
            return <Bell className="h-5 w-5" />
          case "data":
            return <Database className="h-5 w-5" />
          case "file":
            return <FileText className="h-5 w-5" />
          case "integration":
            return <RefreshCw className="h-5 w-5" />
          case "notification":
            return <Mail className="h-5 w-5" />
          default:
            return <Cog className="h-5 w-5" />
        }
    };

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>{node.title}</CardTitle>
                <Badge variant={"outline"} className="ml-2">
                    {node.type}
                </Badge>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-muted p-2">{getIcon()}</div>
                    <div className="text-sm text-muted-foreground">{node.description}</div>
                </div>
            </CardContent>
        </Card>
    )
}