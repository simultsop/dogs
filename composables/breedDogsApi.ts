import { DogImages } from '@/types';

export const breedDogsApi = async (breed: string): Promise<DogImages | null> => {
    return await $fetch<DogImages>(`/api/breed-dogs?breed=${breed}`);
}
