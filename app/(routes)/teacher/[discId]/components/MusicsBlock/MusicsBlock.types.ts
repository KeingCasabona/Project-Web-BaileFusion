import { Music } from "@prisma/client";

export type MusicsBlockProps = {
    idDisc: string;
    musics: Music[] | null
}