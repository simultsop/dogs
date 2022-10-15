type StatusType = 'success' | 'error'

interface RandomDogsResponse {
    status: StatusType
    message: string[]
}

export const randomDogApi = async (dogs: number = 20): Promise<string[] | null> => {
    const response = await $fetch<RandomDogsResponse>(`/api/random?dogs=${dogs}`);
    return response.status === "success" ? response.message : null
}
