export const randomDogApi = async () => {
    const response = await $fetch<{ status: string, message: string }>("/api/random");
    return response.status === "success" ? response.message : 'NotFound'
}
