import { Music } from "@prisma/client";

export type MusicTitleFormProps = {
    discId: string;
    music: Music;
};