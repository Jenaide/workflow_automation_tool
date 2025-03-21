import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function WorkflowTriggers() {
    return (
        <Card>
            <CardContent className="pt-2">
                <div className="space-y-6">
                    <div>
                        <Label className="text-base">Trigger Type</Label>
                        <RadioGroup defaultValue="schedule" className="mt-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={"schedule"} id="schedule" />
                                <Label htmlFor="schedule">Schedule</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={"event"} id="event" />
                                <Label htmlFor="event">Event</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={"webhook"} id="webhook" />
                                <Label htmlFor="webhook">Webhook</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={"manual"} id="manual" />
                                <Label htmlFor="manual">Manual</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="schedule-type">Schedule Type</Label>
                        <Select defaultValue="daily">
                            <SelectTrigger id="schedule-type">
                                <SelectValue placeholder="Select schedule type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input type="time" id="time" defaultValue="09:00" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
};