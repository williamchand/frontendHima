import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async";
import PropTypes from "prop-types";

const hostname = require("../utils/index")

const Meta = ({ title, desc, imageUrl }) => {
    return (
        <HelmetProvider>
            <Helmet defer={false}>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta property="og:url" content={hostname.HOST_NAME + window.location.pathname + window.location.search} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={imageUrl} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={hostname.HOST_NAME + window.location.pathname + window.location.search} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content={imageUrl} />
            </Helmet>
        </HelmetProvider>
    )
};

Meta.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
}

export default Meta;