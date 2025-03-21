"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { WorkflowCanvas } from "./workflow-canvas";
import { WorkflowSettings } from "./workflow-settings";
import { WorkflowTriggers } from "./workflow-triggers";

export function WorkflowBuilder() {
    const [activeTab, setActiveTab] = useState("design")
    return (
        <div className="space-y-1 p-2">
            <Card>
                <CardContent className="pt-2">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Workflow name</Label>
                            <Input id="name" placeholder="Enter your workflow name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select>
                                <SelectTrigger id="category">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="data">Data Processing</SelectItem>
                                    <SelectItem value="file">File Management</SelectItem>
                                    <SelectItem value="system">System Monitoring</SelectItem>
                                    <SelectItem value="integration">API Integration</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="Describe the purpose of this workflow" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="triggers">Triggers</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="test">Test</TabsTrigger>
                </TabsList>
                <TabsContent value="design" className="mt-4">
                    <WorkflowCanvas />
                </TabsContent>
                <TabsContent value="triggers" className="mt-4">
                    <WorkflowTriggers />
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                    <WorkflowSettings />
                </TabsContent>
                <TabsContent value="test" className="mt-4">
                    <Card>
                        <CardContent className="pt-6">
                        <div className="space-y-4">
                            <div className="text-center p-8">
                            <p className="text-muted-foreground">Run a test execution of your workflow</p>
                            <Button className="mt-4">Run Test</Button>
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button>Save & Activate</Button>
            </div>
        </div>
    )
}