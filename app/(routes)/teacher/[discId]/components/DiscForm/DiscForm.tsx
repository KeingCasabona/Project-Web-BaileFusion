"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Settings } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import { DiscFormProps } from "./DiscForm.types";
import { formSchema } from "./DiscForm.form";
import axios from "axios"
import { toast } from "sonner"

export function DiscForm(props: DiscFormProps) {
    const { disc } = props;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: disc.title || "",
            slug: disc.slug || "",
            description: disc.description || "",
        },
    })


    const onSubmit = (values: z.infer<typeof formSchema>) => {
        try {
            axios.patch(`/api/disc/${disc.id}`, values);
            toast("Disco actualizado correctamente", {
                style: { background: "#16a34a", color: "white" }, // verde
            })
        } catch (error) {
            toast("Ocurrió un error", {
                style: { background: "#dc2626", color: "white" }, // rojo
            });

        }
    }

    return (
        <div className="p-6 bg-[#1E182E] rounded-md text-[#E9E6ED]">
            <TitleBlock title="Configuración del Disco" icon={Settings} />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Título del Disco</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Disco #" {...field} />
                                    </FormControl >
                                    <FormDescription className="tex-[#A280FF]" >
                                        Número del Disco de Baile Fusión.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Url del Disco</FormLabel>
                                    <FormControl>
                                        <Input placeholder="disco-#" {...field} disabled />
                                    </FormControl>
                                    <FormDescription>
                                        No se puede modificar.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre del Disco</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Nombre completo del Disco.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <Button className="bg-emerald-700 hover:bg-[#E9E6ED] hover:text-[#0D0C11]" type="submit">Guardar cambios</Button>
                </form>
            </Form>
        </div>)
}