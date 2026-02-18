import { redis } from "../redis/client";

interface GetSubscriberRankingPositionParams {
    subscriberId: string;
}

export async function getSubscriberRankingPosition({subscriberId }: GetSubscriberRankingPositionParams)  {

    const rank = await redis.zrevrank("referral:ranking", subscriberId)

    if (rank == null) return { position: 0 }

    return { position: rank + 1 }
}