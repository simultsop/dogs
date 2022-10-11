export default defineEventHandler((event) => {
    return $fetch<{ message: string, status: string }>("https://dog.ceo/api/breeds/image/random");
})