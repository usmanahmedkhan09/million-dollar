module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts',
            title: 'million-dollar',
        },
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3000/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}