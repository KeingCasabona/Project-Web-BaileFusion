import { Music, Disc } from "@prisma/client";

export type DiscFormProps = {
    disc: DiscWithRelations;
};

type DiscWithRelations = Disc & { music: Music[] };