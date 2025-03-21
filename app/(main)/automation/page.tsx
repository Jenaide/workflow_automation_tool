"use client";
import { automationTableHead } from "@/components/constants";
import { SearchInput } from "@/components/form/SearchInput";
import { CreateAutomationModal } from "@/components/Modal/CreateAutomationModal";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";  
import { Calendar, Ellipsis } from "lucide-react";
import { WorkflowActions } from "./_components/workflow-actions";
import { PublishSwitcher } from "./_components/publish-switcher";

export default function AutomationPage() {
   
    return (
        <section className="p-4 bg-[#eeeff8]">
            <div className="flex items-center justify-between">
                <SearchInput placeholder={"Search automation..."}/>
                <CreateAutomationModal />
            </div>

            <div className="scrollbar bg-background mt-6 overflow-y-hidden pb-6 h-[calc(100vh-157px)] border border-input rounded-lg">
                <Table className="w-full text-sm text-left">
                    <TableHeader className="text-xs uppercase bg-muted/100 dark:bg-slate-900">
                        <TableRow>
                            {automationTableHead.map((Item, index) => 
                                <TableHead key={index} scope="col" className="px-4 py-3.5 font-semibold">{Item}</TableHead>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-b border-input">

                            <TableCell className="px-4 py-3.5 font-normal">
                                Delivery Warning
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-muted-foreground" /> 10 April, 2025
                                </div>
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal">
                                <PublishSwitcher />
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button className="bg-transparent hover:bg-transparent">
                                            <Ellipsis className="text-2xl text-muted-foreground" />
                                        </Button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-[150px] bg-background border border-input rounded-lg p-0" align="start">
                                        <WorkflowActions />
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}