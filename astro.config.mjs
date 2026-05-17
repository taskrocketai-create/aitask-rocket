// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Standalone TaskRocket/Aitha Astro site for Vercel.
// No Wix adapter, Wix CLI, Wix auth, or Wix deployment integration is used.
export default defineConfig({
  output: "static",
  integrations: [tailwind(), react()],
  devToolbar: { enabled: false },
  server: {
    allowedHosts: true,
    host: true,
  },
});
