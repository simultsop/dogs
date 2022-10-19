import { DogImages } from '@/types';

export const myDogsApi = async (fingerprint: string = 'guest'): Promise<DogImages> => {
    const myDogs = await $fetch<DogImages>(`/api/read?key=${fingerprint}`);
    return myDogs;
}
