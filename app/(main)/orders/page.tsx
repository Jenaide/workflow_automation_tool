
import { OrderModal } from "@/components/Modal/OrderModal";
import { orderStatusColor, orderTableHead } from "@/components/constants";
import { SearchInput } from "@/components/form/SearchInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
import { ActionButtons } from "./_components/action-buttons";

export default function OrdersPage() {
   
    return (
        <section className="p-4 bg-[#eeeff8]">
            <div className="flex items-center justify-between">
                <SearchInput placeholder={"Search orders..."}/>
                <OrderModal />
            </div>

            <div className="scrollbar bg-background mt-6 overflow-y-hidden pb-6 h-[calc(100vh-157px)] border border-input rounded-lg">
                <Table className="w-full text-sm text-left">
                    <TableHeader className="text-xs uppercase bg-muted/100 dark:bg-slate-900">
                        <TableRow>
                            {orderTableHead.map((Item, index) => 
                                <TableHead key={index} scope="col" className="px-4 py-3.5 font-semibold">{Item}</TableHead>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="border-b border-input">
                            <TableCell className="px-4 py-3.5 font-normal">
                                <div className="flex items-center gap-2">
                                    <Checkbox className="data-[state=checked]:bg-[#3c51d7] data-[state=checked]:border-[#3c51d7] border-input data-[state=checked]:text-white" />
                                    <Label>INV00001</Label>
                                </div>
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal">
                                <div className="flex items-center gap-3 mb-1.5">
                                    <p className="text-muted-foreground font-light w-[14%]"> From:</p>
                                    <p className="font-light">Worcester</p>
                                </div>
                                <div className="flex items-center gap-3 mb-1.5">
                                    <p className="text-muted-foreground font-light w-[14%]"> To:</p>
                                    <p className="font-light">Cape Town</p>
                                </div>
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal">
                                <h3 className="font-semibold mb-1.5">MacBook Pro</h3>
                                <p className="font-light text-sm text-muted-foreground">1166kg</p>
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal">
                                R29000
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-muted-foreground" /> 10 April, 2025
                                </div>
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal">
                                <div className="flex items-center gap-2">
                                    <span style={{background: `${orderStatusColor["on-time"]}`}} className="w-2.5 h-2.5 rounded-full block"></span>
                                    <span style={{color: `${orderStatusColor["on-time"]}`}}>on-time</span>
                                </div>
                            </TableCell>

                            <TableCell className="px-4 py-3.5 font-normal">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button className="bg-transparent hover:bg-transparent">
                                            <Ellipsis className="text-2xl text-muted-foreground" />
                                        </Button>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-[150px] bg-background border border-input rounded-lg p-0" align="end">
                                        <ActionButtons />
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