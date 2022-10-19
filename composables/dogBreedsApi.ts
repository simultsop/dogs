import { BreedTree, BreedListResponse } from '@/types';

export const dogBreedsApi = async (): Promise<BreedTree | null> => {
    const response = await $fetch<BreedListResponse>("/api/breeds");
    return response.status === "success" ? response.message : null;
}
