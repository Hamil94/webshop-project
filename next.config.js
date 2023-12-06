/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    images: {
        domains: [
            "www.go.tw",
            "m.media-amazon.com",
            "products.com",
            "prophotos.ru",
            "i.imgur.com",
            "tailwind.com",
            "images.unsplash.com",
            "picsum.photos",
            "placeimg.com",
            "loremflickr.com",
            "images.pexels.com",
            "api.escuelajs.co",
            "raw.githubusercontent.com",
            "encrypted-tbn0.gstatic.com",
            "tse3.mm.bing.net",
            "tse4.mm.bing.net",
            "thumbs.dreamstime.com",
            "http2.mlstatic.com",
            "placeimg.co",
            "www.zdnet.com",
            "i.pinimg.com",
            "api.lorem.space",
        ],
    },
};

module.exports = nextConfig;
