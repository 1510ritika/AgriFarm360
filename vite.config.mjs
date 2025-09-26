export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist', // <-- change to dist
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
