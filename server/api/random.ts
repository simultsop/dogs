export default defineEventHandler((event) => {
    const query = getQuery(event)
    return $fetch<{ message: string, status: string }>(`https://dog.ceo/api/breeds/image/random/${query.dogs}`);
})