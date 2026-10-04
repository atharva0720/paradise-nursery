import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If your GitHub repository is not named "paradise-nursery",
// change the value below to match your repository name.
export default defineConfig({
  plugins: [react()],
  base: "/paradise-nursery/"
});