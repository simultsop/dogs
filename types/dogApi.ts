export type DogResponseStatus = 'success' | 'error';
export type DogImage = string
export type DogImages = string[]
export type BreedTree = {
    name: string | string[]
}

export interface RandomDogResponse {
    status: DogResponseStatus
    message: DogImage
}

export interface RandomDogsResponse {
    status: DogResponseStatus
    message: DogImages
}

export interface BreedListResponse {
    status: DogResponseStatus
    message: BreedTree
}

export interface Breed {
    key: string[];
}
