import { DogImages, RandomDogsResponse } from '@/types';

export const randomDogApi = async (dogs: number = 20): Promise<DogImages | null> => {
    const response = await $fetch<RandomDogsResponse>(`/api/random?dogs=${dogs}`);
    return response.status === "success" ? response.message : null;
}
