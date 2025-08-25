import { Disc, Music } from "@prisma/client";

export type DiscFormProps = {
    disc: DiscWithRelations;
};

type DiscWithRelations = Disc & { chapters: Music[] };