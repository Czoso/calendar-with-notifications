import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    baseUrl: 'http://localhost:4200',
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.spec.ts',
  },
});
