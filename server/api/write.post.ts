export default defineEventHandler(async (event): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        const query = getQuery(event)
        const body = await useBody(event)
        useStorage()
            .setItem(`redis:${query.key}`, body)
            .then()
            .catch((error: any) => reject(error))
            .then(() => resolve(`${query.key} stored successfully`))
    })
})