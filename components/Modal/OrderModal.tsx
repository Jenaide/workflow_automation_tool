"use client";

import { CalendarIcon, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Modal } from "./Modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema } from "@/schemas/validationSchema";
import React, { useState } from "react";
import { z } from "zod";
import { Input } from "../ui/input";
import { SelectItem } from "../ui/select";
import { SelectBox } from "../custom/SelectBox";
import { orderStatuses } from "../constants";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DialogClose, DialogFooter } from "../ui/dialog";


interface Order {
    type?: string;
    parameters?: string;
    price?: string;
    status?: "on-time" | "delay" | "delivered";
    deliveryDate?: string;
    sender?: {
        name?: string;
        address?: string;
        phone?: string;
    };
    receiver?: {
        name?: string;
        address?: string;
        phone?: string;
    };
}

interface OrderModalProps{
    order?: Order;
    type?: "CREATE" | "UPDATE";
    trigger?: React.ReactNode;
}



export function OrderModal({order = {}, type="CREATE", trigger}: OrderModalProps) {
    const defaultOrder: Order = {
        type: "",
        parameters: "",
        price: "",
        status: "on-time",
        deliveryDate: "",
        sender: { name: "", address: "", phone: "" },
        receiver: { name: "", address: "", phone: "" }
    };

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof orderSchema>>({
        resolver: zodResolver(orderSchema),
        defaultValues: { ...defaultOrder, ...order }
    });

    const OnSubmit = async (values: z.infer<typeof orderSchema>) => {
        setLoading(true);
        console.log(values, "order value")
    }

    const TriggerButton = trigger ?? (
        <Button variant={"default"}>
            New Order<Plus  size={100}/>
        </Button>
    );

    return (
        <Modal 
            title={type === 'UPDATE' ? 'Update Order' : "Create Order"}
            trigger={TriggerButton}
            classes={"max-w-[800px]"}
            description=""
            >
                <div className="mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-2" >
                            <h3 className="font-semibold">Order information</h3>
                            <div className="grid grid-cols-2 gap-5">
                                <FormField 
                                    control={form.control}
                                    name="type"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel htmlFor="order-type">Order Type</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="type of order" />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="parameters"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel htmlFor="parameters">Parameters</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Weight and dimensions" />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="price"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel htmlFor="price">Price</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Price" />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="status"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel htmlFor="status">Status</FormLabel>
                                            <FormControl>
                                                <SelectBox 
                                                    placeHolder="Select order status"
                                                    value={field.value}
                                                    onChange={(value) => field.onChange(value)}
                                                    disabled={false}
                                                >
                                                    {
                                                        orderStatuses.map((status) =>
                                                            <SelectItem key={status.value} value={status.value}>
                                                                {status.label}
                                                            </SelectItem>
                                                        )
                                                    }
                                                </SelectBox>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="deliveryDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                        <FormLabel>Delivery Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                                >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value ? new Date(field.value) : undefined}
                                                    onSelect={(date) => field.onChange(date?.toISOString())}
                                                    disabled={(date) =>
                                                    date < new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* sender section */}
                            <div className="grid grid-cols-2 gap-4 !mt-5'">
                                <div className="space-y-3">
                                    <h3 className="font-semibold">Sender Information</h3>
                                    <FormField 
                                        control={form.control}
                                        name="sender.name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor="sender-name">Name</FormLabel>
                                                <FormControl>
                                                    <Input type="text" {...field} placeholder="Sender's name" />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField 
                                        control={form.control}
                                        name="sender.address"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor="sender-address">Address</FormLabel>
                                                <FormControl>
                                                    <Input type="text" {...field} placeholder="Sender's address" />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField 
                                        control={form.control}
                                        name="sender.phone"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor="sender-phone">Phone</FormLabel>
                                                <FormControl>
                                                    <Input type="text" {...field} placeholder="Sender's phone" />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* receiver section */}
                                <div className="space-y-3">
                                    <h3 className="font-semibold">Receiver Information</h3>
                                    <FormField 
                                        control={form.control}
                                        name="receiver.name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor="receiver-name">Name</FormLabel>
                                                <FormControl>
                                                    <Input type="text" {...field} placeholder="Receiver's name" />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField 
                                        control={form.control}
                                        name="receiver.address"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor="receiver-address">Address</FormLabel>
                                                <FormControl>
                                                    <Input type="text" {...field} placeholder="Receiver's address" />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField 
                                        control={form.control}
                                        name="receiver.phone"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel htmlFor="receiver-phone">Phone</FormLabel>
                                                <FormControl>
                                                    <Input type="text" {...field} placeholder="Receiver's phone" />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="!mt-7">
                                <DialogFooter className={`sm:space-x-3`}>
                                    <DialogClose asChild>
                                        <Button variant={"outline"} type="button" className="px-6 cursor-pointer">Cancel</Button>
                                    </DialogClose>
                                    <Button disabled={loading} type="submit" variant={"default"} className="px-6 cursor-pointer">
                                            {`${loading 
                                            ? type === 'UPDATE' 
                                            ? 'Updating...' 
                                            : 'Creating...' 
                                            : type === 'UPDATE' 
                                            ? 'Update' 
                                            : 'Create'} Order`}
                                        </Button>
                                </DialogFooter>
                            </div>
                        </form>
                    </Form>
                </div>
        </Modal>
    )
};