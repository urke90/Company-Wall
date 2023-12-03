import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      src: './src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@router': '/src/router',
      '@libs': '/src/libs',
      '@config': '/src/config',
      '@theme': '/src/theme',
      '@custom-types': './src/types'
    }
  }
});
