"use client"
import { DollarSign } from "lucide-react";
import { TitleBlock } from "../TitleBlock";
import { DiscPriceProps } from "./DiscPrice.types";
// import { Select } from "@/components/ui/select";
import { useState } from "react";
// import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";

export function DiscPrice(props: DiscPriceProps) {
    const { idDisc, priceDisc } = props;
    const [price, setPrice] = useState<string>(priceDisc || "");

    const onChangePrice = async () => {
        axios.patch(`/api/disc/${idDisc}`, {
            price: price,
        })

        toast("Precio actualizado", {
            style: { background: "#16a34a", color: "white" }, // verde
        })
    }


    return (
        <div className="p-6 bg-[#1E182E] rounded-md h-fit">
            <TitleBlock title="Precio del Disco" icon={DollarSign} />

            <div className="mt-4">
                <label className="text-sm text-white mb-2 block">
                    Precio ( S/ )
                </label>
                <Input
                    type="number"
                    placeholder="Colocar el precio del Disco"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full"
                />
            </div>

            {/* <Select onValueChange={setPrice} defaultValue={price}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Colocar el precio del Disco" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Precio del Disco</SelectLabel>
                        <SelectItem value="Gratis">Gratis</SelectItem>
                        <SelectItem value="170">S/ 170</SelectItem>
                        <SelectItem value="180">S/ 180</SelectItem>
                        <SelectItem value="190">S/ 190</SelectItem>
                        <SelectItem value="200">S/ 200</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select> */}

            <Button onClick={onChangePrice} disabled={!price} className="mt-3 bg-emerald-700 hover:bg-[#E9E6ED] hover:text-[#0D0C11]">
                Guardar precio
            </Button>
        </div>
    )
}