import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: 'src/index.js',
            name: 'my_id',
            fileName: (format) => {
                if (format === 'es') return 'my_id.esm.js'
                return `my_id.${format}.js`;
            },
            formats: ['es']
        },
        rollupOptions: {
            output: {
                exports: 'named'
            }
        }
    }
})
