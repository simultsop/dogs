import { DogImage, RandomDogResponse } from '@/types';

export const randomDogApi = async (dogs: number = 20): Promise<DogImage | null> => {
    const response = await $fetch<RandomDogResponse>(`/api/random?dogs=${dogs}`);
    return response.status === "success" ? response.message : null;
}
