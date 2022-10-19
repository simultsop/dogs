import { RandomDogsResponse } from "@/types";

export default defineEventHandler((event) => {
    const query = getQuery(event)
    return $fetch<RandomDogsResponse>(`https://dog.ceo/api/breeds/image/random/${query.dogs}`);
})