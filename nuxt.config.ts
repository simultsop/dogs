// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],
    nitro: {
        storage: {
            'redis': {
                driver: 'redis',
                /* redis connector options */
                port: 6379, // Redis port
                host: "redis", // Redis host
                username: "", // needs Redis >= 6
                password: "",
                db: 0 // Defaults to 0
            }
        }
    }
})
