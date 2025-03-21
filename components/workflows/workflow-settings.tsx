import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";

export function WorkflowSettings() {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="error-handling">Error Handling</Label>
                            <p className="text-sm text-muted-foreground">Automatically retry on failure</p>
                        </div>
                        <Switch id="error-handling" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="notifications">Notifications</Label>
                            <p className="text-sm text-muted-foreground">Send email on completion or failure</p>
                        </div>
                        <Switch id="notifications" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="retry-attempts">Retry attempts</Label>
                        <Input type="number" id="retry-attempts" defaultValue={"3"} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="timeout">Timeout (seconds)</Label>
                        <Input type="number" id="timeout" defaultValue={"300"} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select defaultValue="medium">
                            <SelectTrigger id="priority">
                                <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
};