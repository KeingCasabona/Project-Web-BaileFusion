import { House, Disc2Icon, DiscAlbum, Settings, GraduationCap, ChartArea } from "lucide-react";


export const routes = [
    {
        title: "Inicio",
        url: "/",
        icon: House,
    },
    {
        title: "Discos",
        url: "/discs",
        icon: Disc2Icon,
    },
    {
        title: "Mis Discos",
        url: "/my-discs",
        icon: DiscAlbum,
    },
    {
        title: "Ajustes",
        url: "/settings",
        icon: Settings,
    }
]

export const routesTeacher = [
    {
        title: "Discos",
        url: "/teacher",
        icon: GraduationCap,
    },
    {
        title: "Analíticas",
        url: "/teacher/analytics",
        icon: ChartArea,
    }

];