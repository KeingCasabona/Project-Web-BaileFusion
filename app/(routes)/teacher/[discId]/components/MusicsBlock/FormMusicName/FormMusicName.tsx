"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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

import { FormMusicNameProps } from "./FormMusicName.type";
import { formSchema } from "./FormMusicName.form"
import axios from "axios"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export function FormMusicName(props: FormMusicNameProps) {
    const { idDisc, setShowInputMusic } = props;
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/disc/${idDisc}/music`, {
                title: values.title
            })
            toast("Música creada", {
                style: { background: "#16a34a", color: "white" }, // verde
            });
            setShowInputMusic(false)
            router.refresh()

        } catch (error) {
            toast("Hubo un error al crear la canción", {
                style: { background: "#dc2626", color: "white" }, // rojo
            });
            console.log(error);

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre de la canción</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className=" bg-emerald-700 hover:bg-[#E9E6ED] hover:text-[#0D0C11]"
                    type="submit"
                    disabled={form.formState.isSubmitting || !form.formState.isValid}>
                    {form.formState.isSubmitting ? "Creando..." : "Crear"}
                </Button>
            </form>
        </Form>
    )
}