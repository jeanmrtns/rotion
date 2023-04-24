import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tsconfigPathPlugin from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

const tsconfigPaths = tsconfigPathPlugin({
  projects: [resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
    publicDir: resolve('resources'),
  },
  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },
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
    plugins: [tsconfigPaths, react()],
  },
})
