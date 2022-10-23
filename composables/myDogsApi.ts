import { DogImages } from '@/types';

export const myDogsApi = async (uid: string = getUid()): Promise<DogImages> => {
    const myDogs = await $fetch<DogImages>(`/api/read?key=${uid}`);
    return Array.isArray(myDogs) ? myDogs : [];
}
