// vite.config.mts
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'
import { redwood } from "rwsdk/vite";
import type { PluginOption } from 'vite';

export default defineConfig({
  environments: {
    ssr: {},
  },
  plugins: [
    redwood(),
    tailwindcss(),
  ] as PluginOption[],
});