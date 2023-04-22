import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    publicDir: resolve('resources'),
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: 'src/renderer/tailwind.config.js',
          }),
        ],
      },
    },
    plugins: [react()],
  },
})
