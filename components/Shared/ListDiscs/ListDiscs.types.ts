import { Music, Disc } from "@prisma/client";

export type ListDiscsProps = {
    title: string
    discs: (Disc & { musics: Music[] })[] | null;
}
