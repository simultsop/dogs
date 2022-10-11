export const dogBreedsApi = async () => {
    const response = await $fetch<{ status: string, message: string }>("/api/breeds");
    return response.status === "success" ? response.message : {}
}
