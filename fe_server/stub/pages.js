require('dotenv').config()

const defaultMeta = 
    {
        title: "Hima Persis",
        description: "Hima Persis",
        image: `${process.env.ENV_HOST_NAME}/himapersis.jpg`
    }

const pages = [
    {
        slug:'sejarah',
        title: "Hima Persis - Sejarah",
        description: "Hima Persis - Sejarah",
        image: `${process.env.ENV_HOST_NAME}/himapersis.jpg`
    },
    {
        slug:'berita',
        title: "Hima Persis - Berita",
        description: "Hima Persis - Berita",
        image: `${process.env.ENV_HOST_NAME}/himapersis.jpg`
    }
    //please add more if you want, detext based on slug
]
module.exports = { pages,defaultMeta }
