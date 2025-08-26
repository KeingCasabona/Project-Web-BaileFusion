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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { MusicTitleFormProps } from "./MusicTitleForm.types";
import { formSchema } from "./MusicTitleForm.form";
import { EditorDescription } from "@/components/Shared"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function MusicTitleForm(props: MusicTitleFormProps) {
    const { discId, music } = props;
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: music.title || "",
            // description: music.description || "",
            isFree: music.isFree || false,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/disc/${discId}/music/${music.id}`, {
                title: values.title,
                // description: values.description,
                isFree: values.isFree,
            });
            toast("Canción modificada", {
                style: { background: "#16a34a", color: "white" }, // verde
            });
            router.refresh();
        } catch (error) {
            toast("Ocurrió un error", {
                style: { background: "#dc2626", color: "white" }, // rojo
            });
        }
    }
    return (
        <div className="p-6 rounded-md bg-[#1E182E] mt-6" >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 gap-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre de la canción</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Escriba el nombre de la canción.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Descripción de la canción</FormLabel>
                                <FormControl>
                                    <EditorDescription {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
                    <FormField
                        control={form.control}
                        name="isFree"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                                <FormControl>
                                    <Checkbox
                                        className="cursor-pointer"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>¿Es gratuita?</FormLabel>
                                    <FormDescription>
                                        Si la canción es gratuita, los usuarios podrán acceder a ella sin necesidad de comprar el disco.
                                    </FormDescription>
                                </div>
                            </FormItem>
                        )}
                    />
                    <div />
                    <Button
                        className="mt-3 bg-emerald-700 hover:bg-[#E9E6ED] hover:text-[#0D0C11] cursor-pointer"
                        type="submit">Guardar
                    </Button>
                </form>
            </Form>
        </div>
    );
}
