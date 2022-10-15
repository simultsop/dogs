type StatusType = 'success' | 'error'

interface Breed {
    key: string[];
}

interface DogBreedsResponse {
    status: StatusType
    message: Breed[]
}

export const dogBreedsApi = async (): Promise<Breed[] | null> => {
    const response = await $fetch<DogBreedsResponse>("/api/breeds");
    return response.status === "success" ? response.message : null
}
