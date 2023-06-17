import { withConsole } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
