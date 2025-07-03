import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '.', // copy to root of dist folder
        },
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})
