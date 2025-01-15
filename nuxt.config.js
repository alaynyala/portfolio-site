export default {
  // Disable server-side rendering for SPA
  ssr: false,

  // Other configurations...
  head: {
    title: 'alainahunt.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'alainahunt.com' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  compatibilityDate: '2025-01-14'
};