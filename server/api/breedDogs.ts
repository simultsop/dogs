import { DogImages, RandomDogsResponse } from '@/types'

export default defineEventHandler(async (event): Promise<DogImages> => {
    const query = getQuery(event)
    const data = await useStorage().getItem<DogImages>(`redis:${query.breed}`);

    if (data && data.length > 0) {
        return data;
    }

    const dogApiResponse = await $fetch<RandomDogsResponse>(`https://dog.ceo/api/breed/${query.breed}/images`);
    if (dogApiResponse.status === 'success') {
        await useStorage().setItem(`redis:${query.breed}`, dogApiResponse.message);
    }

    return dogApiResponse.message
});