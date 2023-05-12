const express = require('express');
const axios = require('axios')
const path = require('path');
const fs = require("fs");
require('dotenv').config()


const app = express();

const { getMeta } = require('./utils/PostMeta');

axios.defaults.withCredentials = true;

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));


// here we serve the index.html page
app.get('/*', (req, res, next) => {

    const url = req.path;
    console.log(url);


    if (req.originalUrl.includes('/favicon')) {
        return res.status(200).send('/favicon.ico')
    }

    fs.readFile(indexPath, 'utf8', (err, htmlData) => {



        // console.log("jalan");
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }


        getMeta(req.originalUrl)
            .then(function (meta) {
                const metaURL = process.env.ENV_HOST_NAME + req.originalUrl;

                if (meta.error) {
                    return res.status(404).send("Post not found")
                }
                console.log(meta)
                htmlData = htmlData.replace(
                    "<title>Hima Persis</title>",
                    `<title>${meta.title}</title>`
                )
                    .replace(
                        "<title>React App</title>",
                        `<title>${meta.title}</title>`
                    )
                    .replace(
                        `<meta name="description" content="Hima Persis"/>`,
                        `<meta name="description" content="${meta.title}" />`
                    )
                    .replace(
                        `<meta property="og:title" content="Hima Persis"/>`,
                        `<meta property="og:title" content="${meta.title}" />`
                    )

                    .replace(
                        `<meta property="og:description" content="Hima Persis"/>`,
                        `<meta property="og:description" content="${meta.title}" />`
                    )

                    .replace(
                        `<meta property="og:image" content="https://himapersis.id/himapersis.jpg"/>`,
                        `<meta property="og:image" content="${meta.image}" />`
                    )

                    .replace(
                        `<meta property="og:url" content="https://himapersis.id"/>`,
                        `<meta property="og:url" content="${metaURL}" />`
                    )

                    .replace(
                        `<meta name="twitter:title" content="Hima Persis"/>`,
                        `<meta name="twitter:title" content="${meta.title}" />`
                    )

                    .replace(
                        `<meta name="twitter:description" content="Hima Persis"/>`,
                        `<meta name="twitter:description" content="${meta.title}" />`
                    )

                    .replace(
                        `<meta name="twitter:image" content="https://himapersis.id/himapersis.jpg"/>`,
                        `<meta name="twitter:image" content="${meta.image}" />`
                    )

                    .replace(
                        `<meta property="twitter:url" content="https://himapersis.id"/>`,
                        `<meta property="twitter:url" content="${metaURL}" />`
                    )



                return res.send(htmlData);
            })
            .catch(function (error) {
                console.log(error)
                return res.status(404).send("Post not found")
            })

    });

});



// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});