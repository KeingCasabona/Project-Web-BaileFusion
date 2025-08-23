"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { formSchema } from "./FormCreateDisc.form"


export function FormCreateDisc() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            discName: "",
            slug: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

        try {
            const res = await axios.post("/api/disc", values)

            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
                <FormField
                    control={form.control}
                    name="discName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre del disco</FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre para el enlace web</FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Crear disco</Button>
            </form>
        </Form>
    )
}