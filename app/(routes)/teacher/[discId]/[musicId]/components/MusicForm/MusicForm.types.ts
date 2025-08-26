import { Music } from "@prisma/client";

export type MusicFormProps = {
    music: Music | null;
    discId: string;
}
