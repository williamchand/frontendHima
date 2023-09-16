const { pages, defaultMeta } = require('../stub/pages');
require('dotenv').config()
const axios = require('axios')
axios.defaults.withCredentials = true;




exports.getMeta = async function (urlstr) {
    const url = urlstr.split('/')
    console.log(urlstr)
    let returnMeta = defaultMeta;

    //special treatement are artikel
    if (url[1] === 'artikel' && url.length > 2 && url[2] !== "") {
        console.log('artikel check run')
        console.log(url[2])
        const resp = await axios.get(process.env.ENV_API_LOCAL + `/artikel/${url[2]}`)
        if (!resp.data) {
            returnMeta.error = true;
        }
        returnMeta = {
            title:  defaultMeta.description,
            description:  defaultMeta.description,
            image:defaultMeta.image,
        }
        if (resp.data.judul) {
            returnMeta.title = resp.data.judul;
            returnMeta.description = resp.data.judul;
        }
        if (resp.data.url)  {
            returnMeta.image = resp.data.url;
        }
        // axios.get(process.env.ENV_API_LOCAL + `/artikel/${url[2]}`)
        //     .then(function (response) {
        //         console.log(response.data.judul)
        //         if(!response.data){
        //             returnMeta.error = true;
        //         }

        //         return {
        //             // title:response.data.judul,
        //             // description:response.data.judul ??  defaultMeta.description,
        //             // image:response.data.url ?? defaultMeta.image,
        //         }
        //     })
        //     .catch(function (error) {
        //         //console.log(error);
        //         // return
        //         returnMeta.error = true;
        //     });
    } else {
        // do search on pages or return default
        returnMeta = pages.filter(e => e.slug === url[1])[0] ?? defaultMeta
    }

    // console.log(returnMeta)
    return returnMeta
}


