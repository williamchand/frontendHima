import React from "react";
import Layout from "../../../components/user/Layout/Layout";
import Publikasi from "../../../components/user/Publikasi";
import Publication from "../../../components/user/HomePage/publicationCollection";

const PublikasiPage = () => {
    return (
        <div>
            <Layout>
                <Publication/>
            </Layout>
        </div>
    )
}

export default PublikasiPage