import { z } from "zod";

export const SignupSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be atleast 2 charactors long",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be atleast 6 characters long",
    }).max(10, "Password is to long"),
});

export const LoginSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(1, {
      message: "Please enter a valid password",
    }),
});

export const orderSchema = z.object({
    type: z.string().min(2).max(50),
    parameters: z.string().min(2).max(50),
    price: z.string().min(0),
    status: z.enum(["on-time", "delay", "delivered"]),
    deliveryDate: z.string().min(2).max(50),

    sender: z.object({
        name: z.string().min(2).max(50),
        address: z.string().min(5).max(100),
        phone: z.string().min(11).max(15),
    }),
    receiver: z.object({
        name: z.string().min(2).max(50),
        address: z.string().min(5).max(100),
        phone: z.string().min(11).max(15),
    }),
})