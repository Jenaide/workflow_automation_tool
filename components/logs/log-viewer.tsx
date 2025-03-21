"use client";
import { DownloadCloud, RefreshCw, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import * as XLSX from "xlsx";

type LogEntry = {
    id: string
    timestamp: string
    level: "info" | "warning" | "error"
    source: string
    message: string
  }
  
  const mockLogs: LogEntry[] = [
    {
      id: "1",
      timestamp: "2023-03-15 09:00:15",
      level: "info",
      source: "Data Synchronization",
      message: "Task started successfully",
    },
    {
      id: "2",
      timestamp: "2023-03-15 09:01:30",
      level: "info",
      source: "Data Synchronization",
      message: "Connected to external API",
    },
    {
      id: "3",
      timestamp: "2023-03-15 09:02:45",
      level: "warning",
      source: "Data Synchronization",
      message: "Rate limit approaching, slowing down requests",
    },
    {
      id: "4",
      timestamp: "2023-03-15 09:03:10",
      level: "error",
      source: "File Backup",
      message: "Failed to connect to storage service",
    },
    {
      id: "5",
      timestamp: "2023-03-15 09:05:22",
      level: "info",
      source: "System Monitoring",
      message: "CPU usage normal at 45%",
    },
    {
      id: "6",
      timestamp: "2023-03-15 09:10:05",
      level: "info",
      source: "Data Synchronization",
      message: "Task completed successfully",
    },
    {
      id: "7",
      timestamp: "2023-03-15 09:15:30",
      level: "error",
      source: "Email Campaign",
      message: "Failed to send email: Invalid recipient address",
    },
    {
      id: "8",
      timestamp: "2023-03-15 09:20:15",
      level: "warning",
      source: "System Monitoring",
      message: "Memory usage high at 85%",
    },
]

export function LogsViewer() {
    const [logs, setLogs] = useState<LogEntry[]>(mockLogs);
    const [filter, setFilter] = useState("");
    const [levelFilter, setLevelFilter] = useState("all");

    const handleRefresh = () => {
        setLogs([ ...mockLogs ]);// Simulates a refresh by resetting logs
    };

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredLogs);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Logs");

        // Create a downloadable Excel file
        XLSX.writeFile(workbook, "system_logs.xlsx");
    };

    const filteredLogs = logs.filter((log) => {
        const isSearchMatch =
        log.message.toLowerCase().includes(filter.toLowerCase()) ||
        log.source.toLowerCase().includes(filter.toLowerCase())

        const isLevelMatch = levelFilter === "all" || log.level === levelFilter

        return isSearchMatch && isLevelMatch;
    })
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>System Logs</CardTitle>
                <div className="flex space-x-2">
                    <Button variant={"outline"} size={"icon"} onClick={handleRefresh}>
                        <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button variant={"outline"} size={"icon"} onClick={handleDownload}>
                        <DownloadCloud className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                {/* Search & Filter */}
                <div className="flex items-center space-x-2 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Search logs. . ."
                            className="pl-8"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                    <Select value={levelFilter} onValueChange={setLevelFilter}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Levels</SelectItem>
                            <SelectItem value="info">Info</SelectItem>
                            <SelectItem value="warning">Warning</SelectItem>
                            <SelectItem value="error">Error</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Logs Table */}
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>Level</TableHead>
                                <TableHead>Source</TableHead>
                                <TableHead className="w-[40%]">Message</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredLogs.length > 0 ? (
                                filteredLogs.map((log) => (
                                    <TableRow key={log.id}>
                                        <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    log.level === 'info' 
                                                        ? 'default' 
                                                        : log.level === 'warning' 
                                                        ? 'secondary' 
                                                        : 'destructive'
                                                }
                                                className={log.level === 'warning' ? 'bg-yellow-500 text-black' : ''}
                                            >
                                                {log.level}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{log.source}</TableCell>
                                        <TableCell>{log.message}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-24 text-center">
                                        No logs found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}