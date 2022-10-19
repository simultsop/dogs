import { BreedListResponse } from "@/types";

export default defineEventHandler((event): Promise<BreedListResponse> => {
    return $fetch<BreedListResponse>("https://dog.ceo/api/breeds/list/all");
});