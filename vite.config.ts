import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000
  }
  // resolve: {
  //   alias: {
  //     src: '/src',
  //     '@components': '/src/components',
  //     '@pages': '/src/pages',
  //     '@router': '/src/router',
  //     '@libs': '/src/libs',
  //     '@config': '/src/config',
  //     '@theme': '/src/theme',
  //     '@custom-types': './src/types',
  //     '@hooks': './src/hooks',
  //     '@api': './src/api'
  //   }
  // }
});
