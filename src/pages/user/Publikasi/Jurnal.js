import React from "react";
import PublikasiJurnal from "../../../components/user/ELibraryPage/PublikasiJurnal";
import Layout from "../../../components/user/Layout/Layout";
import Meta from "../../../utils/Meta";

const Jurnal = () => {
    return (
        <>
            <Meta title="Hima Persis - Jurnal" />
            <Layout>
                <PublikasiJurnal />
            </Layout>
        </>
    )
};

export default Jurnal;
