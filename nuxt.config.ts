// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/nuxt3-pm2", // /<reponame>
    },
    css: [
        "vuetify/lib/styles/main.sass",]
        ,
        build: {
            transpile: ["vuetify"],
          },
})
